"use client"

import Image from "next/image";

export function About() {
    return(
        <section className="py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center bg-white rounded-md shadow-xl overflow-hidden border border-pink-50">
          <div className="relative w-full md:w-1/2 h-[400px]">
            <Image 
              src="/assets/chef-julya.png" 
              alt="Chef Julya" 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="w-full md:w-1/2 p-10 md:p-16 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 dancing">Chef Julya</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Apaixonada por doces desde pequena, Julya transforma ingredientes simples em 
              verdadeiras obras de arte...
            </p>
          </div>
        </div>
      </div>
    </section>
    );
}