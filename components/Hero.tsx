import Image from "next/image";
import HeroImage from "@/public/assets/cake.png"

export function Hero() {
    return(
        <section id="home" className="min-h-screen w-full flex flex-col items-center justify-center bg-brand-pink/10 gap-8 sm:gap-12 md:gap-16">
            <div className="flex flex-col items-center gap-6 md:gap-10 max-w-4xl">
                <h1 className="text-3xl sm:text-4xl text-center font-bold leading-tight">Bem-vindo à Confeitaria da <span className="block text-center text-brand-pink-strong font-dancing md:mt-4">Chef Julya!</span></h1>
            </div>
            <div className="relative w-[250px] sm:w-[350px] md:w-[400px] transition-all duration-500">
                <Image
                    src={HeroImage}
                    alt="Bolo decorado"
                    width={500}
                    height={500}
                    priority
                    className="drop-shadow-2xl hover:scale-105 transition-transform"
                />
            </div>
            
            <p className="text-center text-base sm:text-lg md:text-xl text-gray-700 max-w-lg md:max-w-2xl leading-relaxed" >
                Seja bem-vindo ao doce mundo da Chef Julya, onde cada sobremesa é feita com
                carinho, dedicação e os melhores ingredientes.
            </p>
            <button className="bg-brand-pink-strong text-white px-8 py-3 rounded-full font-bold          shadow-lg hover:brightness-110 transition-all active:scale-95">
                    Encomendar Agora
            </button>
        </section>
    );
}