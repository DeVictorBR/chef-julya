"use client"

import Image from "next/image";
import HeroImage from "@/public/assets/cake.png"

export function Hero() {
    return (
        <section id="home" className="min-h-screen w-full flex items-center justify-center bg-brand-pink/10 px-6">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6">
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-gray-800">
                        Bem-vindo à Confeitaria da 
                        <span className="block text-brand-pink-strong font-dancing md:mt-4">
                            Chef Julya!
                        </span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-lg leading-relaxed">
                        Seja bem-vindo ao doce mundo da Chef Julya, onde cada sobremesa é feita com
                        carinho, dedicação e os melhores ingredientes.
                    </p>

                    <button className="bg-brand-pink-strong text-white px-10 py-3 rounded-full font-bold shadow-lg hover:brightness-110 transition-all active:scale-95 w-fit cursor-pointer">
                        Encomendar Agora
                    </button>
                </div>

                <div className="flex-1 flex justify-center items-center">
                    <div className="relative w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] transition-all duration-500">
                        <Image
                            src={HeroImage}
                            alt="Bolo decorado"
                            width={600}
                            height={600}
                            priority
                            className="drop-shadow-2xl hover:scale-105 transition-transform object-contain"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}