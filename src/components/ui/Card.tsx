"use client"

import Image from "next/image";
import { ReactNode, useState, useEffect } from "react";
import { createPortal } from "react-dom";

type CardProps = {
    title: string,
    description: string,
    id?: string
    imageSrc?: string,
    imageAlt?: string,
    children?: ReactNode,
    className?: string,
    button: boolean
}

export function Card({ title, description, id, imageSrc, imageAlt, className, button }: CardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isModalOpen]);

    return (
        <>
            <div id={id} className={`w-full bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full border border-pink-100 ${className}`}>
                {imageSrc && (
                    <div className="relative w-full aspect-square overflow-hidden bg-gray-50">
                        <Image
                            src={imageSrc}
                            alt={imageAlt || title}
                            fill
                            className="object-contain p-2 transition-transform hover:scale-110 duration-500"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>
                )}
                <div className="w-full p-5 flex flex-grow flex-col gap-3 text-center justify-center items-center">
                    <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                    <p className="text-gray-500 text-sm mb-2 line-clamp-2 flex-grow">{description}</p>
                    { button && (
                        <button 
                        onClick={() => setIsModalOpen(true)} 
                        className="w-full mt-auto bg-brand-pink-strong text-white py-2.5 rounded-xl font-bold hover:brightness-110 transition-all cursor-pointer shadow-sm active:scale-95"
                    >
                        Saber mais
                    </button>
                    ) }
                </div>
            </div>

            {isModalOpen && mounted && createPortal(
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                <div 
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                    onClick={() => setIsModalOpen(false)}
                />
                
                <div className="relative bg-white rounded-[2.5rem] md:max-w-md w-full md:h-auto max-h-[90vh] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300 flex flex-col">
                    <button 
                        onClick={() => setIsModalOpen(false)}
                        className="absolute top-4 right-4 z-50 bg-white/90 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-xl transition-all active:scale-90"
                    >
                    ✕
                    </button>

                    <div className="overflow-y-auto md:overflow-visible flex-grow">
                        <div className="relative h-64 md:h-72 w-full bg-gray-50">
                            <Image 
                                src={imageSrc!} 
                                alt={title} 
                                fill 
                                className="object-contain p-4"
                                priority 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
                        </div>

                        <div className="p-8 pt-6">
                            <div className="flex flex-col gap-1 mb-4">
                                <span className="text-brand-pink-strong font-bold text-xs uppercase tracking-widest">Destaque da Chef</span>
                                <h3 className="text-3xl font-bold text-gray-800 leading-tight">{title}</h3>
                                <div className="h-1.5 w-20 bg-brand-pink-strong mt-2 rounded-full" />
                            </div>
                            
                            <p className="text-gray-600 text-lg leading-relaxed mb-6 italic">
                                "{description}"
                            </p>
                        </div>
                    </div>
                </div>
            </div>,
            document.body
            )}
        </>
    );
}