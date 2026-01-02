"use client"

import Image from "next/image";
import { ReactNode } from "react";

type CardProps = {
    title: string,
    description: string,
    id?: string
    imageSrc?: string,
    imageAlt?: string,
    children?: ReactNode,
    className?: string
}

export function Card({ title, description, id, imageSrc, imageAlt, children, className }: CardProps) {
    return(
        <div id={id} className={`w-full bg-white rounded-2xl shadow-md overflow-hidden flex flex-col ${className}`}>
            {imageSrc && (
                <div>
                    <Image
                    src={imageSrc}
                    alt={imageAlt || title}
                    width={500}
                    height={500}
                    className="object-cover transition-transform hover:scale-105 duration-300"
                    />
                </div>
            )}
            <div className="p-6 flex flex-col gap-3 justify-center">
                <h3 className="text-xl font-bold text-gray-800">{ title }</h3>
                <p className="text-gray-600 leading-relaxed">{ description }</p>
                { children }
            </div>
        </div>
    );
}