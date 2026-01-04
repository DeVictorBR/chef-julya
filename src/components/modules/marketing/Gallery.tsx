"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Card } from "../../ui/Card";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Product {
    id: number,
    title: string,
    description: string,
    image: string
}

interface Category {
    name: string,
    products: Product[]
}

const categories: Category[] = [
    {
        name: "Bolos Tradicionais",
        products: [
            { id: 1, title: "Bolo de Morango", description: "Bolo sabor bicho-do-pé, com massa macia e recheio de brigadeiro de morango, bem docinho e decorado com carinho, ideal para deixar a festa ainda mais especial. 🍓🎂", image: "/assets/bolo_de_morango.jpeg" },
            { id: 2, title: "Bolo de Cenoura", description: "Bolo de cenoura fofinho e saboroso, com gosto caseiro e cobertura doce de chocolate que deixa tudo ainda melhor. 🥕🎂", image: "/assets/bolo_de_cenoura.jpeg" },
            { id: 3, title: "Bolo de Red Velvet", description: "O bolo red velvet apresenta uma massa aveludada e delicadamente amanteigada, com sutis notas de cacau que se equilibram com a doçura suave e elegante, resultando em um sabor refinado, macio e marcante no paladar. 🍒🎂", image: "/assets/bolo_de_red_velvet.jpeg" },
            { id: 4, title: "Bolo de Prestígio", description: "Bolo de prestígio para festa, com massa fofinha de chocolate e recheio cremoso de coco, bem docinho e perfeito para comemorar. 🥥🍫", image: "/assets/bolo_de_prestigio.jpeg" },
            { id: 5, title: "Bolo de Ninho com Nutella", description: "Bolo de Ninho com Nutella para festa, com massa macia, recheio cremoso de leite Ninho e Nutella, bem docinho e perfeito para comemorar. 🍫🎂", image: "/assets/bolo_ninho_com_nutella.jpeg" },
            { id: 6, title: "Bolo de Ninho com Morango", description: "Bolo de Ninho com morango, macio e bem docinho, com decoração de coraçãozinho e recheio cremoso com morangos fresquinhos, feito com carinho para momentos especiais. 🍓🖤", image: "/assets/bolo_de_ninho_com_morango.jpeg" },
            { id: 7, title: "Bolo de Prestígio", description: "Bolo dos Simpsons sabor prestígio, macio e bem docinho, com chocolate e coco deliciosos, perfeito para animar a festa. 🥥🍫", image: "/assets/bolo_de_prestigio_simpsons.jpeg" },
            { id: 8, title: "Bolo de Ninho com Morango", description: "Bolo de Ninho com morango para festa, com massa macia, recheio cremoso de leite Ninho e morangos fresquinho. 🍓🎂", image: "/assets/bolo_de_ninho_morango.jpeg" },
            { id: 9, title: "Bolo de Maracujá", description: "Bolo de maracujá macio e saboroso, com recheio cremoso e um gostinho doce com leve azedinho que encanta. 🎂", image: "/assets/bolo_de_maracuja.jpeg" }
        ]
    },
    {
        name: "Bolos de Pote",
        products: [
            { id: 1, title: "Bolo de Limão", description: "Bolo de limão macio e saboroso, com um toque cítrico suave que deixa cada pedaço leve e delicioso. 🍋🎂", image: "/assets/bolo_de_pote_de_limao.jpeg" },
            { id: 2, title: "Bolo de MM's", description: "Bolo de M&M’s com massa fofinha, chocolate delicioso e confeitos coloridos que deixam cada pedaço doce, divertido e irresistível. 🍬🍫", image: "/assets/bolo_de_pote_de_mms.jpeg" },
            { id: 3, title: "Bolo de Churros", description: "Bolo de churros com massa fofinha, toque de canela e recheio cremoso de doce de leite, feito com carinho para trazer sabor e aconchego em cada pedaço. 🍪🎂", image: "/assets/bolo_de_pote_de_churros.jpeg" },
            { id: 4, title: "Bolo de Prestígio", description: "Bolo de prestígio macio, com chocolate e recheio suave de coco, perfeito para quem ama um sabor doce e clássico. 🥥🍫", image: "/assets/bolo_de_pote_de_prestigio.jpeg" },
            { id: 5, title: "Bolo de Côco", description: "Bolo de coco macio e fofinho, com sabor suave e docinho, perfeito para quem gosta de um bolo simples e gostoso. 🥥🎂", image: "/assets/bolo_de_pote_de_coco.jpeg" },
            { id: 6, title: "Bolo de Ninho com Morango", description: "Bolo no pote de Ninho com morango, bem macio e docinho, com creme de leite Ninho e morangos fresquinhos em camadas deliciosas. 🍓🎂", image: "/assets/bolo_de_pote_de_ninho_com_morango.jpeg" },
            { id: 7, title: "Bolo de Paçoca", description: "Bolo de paçoca macio e bem docinho, com sabor marcante de amendoim, perfeito para quem ama um doce simples e gostoso. 🥜🎂", image: "/assets/bolo_de_pote_de_pacoca.jpeg" }
        ]
    },
    {
        name: "Ovos de Páscoa",
        products: [
            { id: 1, title: "Ovo de Ninho com Nutella", description: "Ovo de Páscoa de Ninho com Nutella, bem docinho e cremoso, com recheio de leite Ninho e Nutella que derrete na boca. 🍫", image: "/assets/ovo_ninho_com_nutella.jpeg" },
            { id: 2, title: "Ovo de Maracujá", description: "Ovo de Páscoa de maracujá, com recheio cremoso e sabor doce com um toque azedinho, perfeito para quem gosta de um doce diferente. 🍋", image: "/assets/ovo_de_maracuja.jpeg" },
            { id: 3, title: "Ovo de Ninho com Nutella", description: "Ovo de Páscoa de Ninho com Nutella, recheado com creme de leite Ninho e Nutella, bem docinho e perfeito para quem ama chocolate. 🍫", image: "/assets/ovo_de_ninho_com_nutella.jpeg" },
            { id: 4, title: "Ovo de Oreo com Nutella", description: "Ovo de Páscoa de Oreo com Nutella, bem cremoso e docinho, com pedacinhos de Oreo e Nutella que deixam tudo ainda mais gostoso. 🍫", image: "/assets/ovo_oreo_com_nutella.jpeg" },
            { id: 5, title: "Ovo de Prestígio", description: "Ovo de Páscoa sabor prestígio, com recheio cremoso de coco e chocolate, bem docinho e perfeito para quem ama esse sabor clássico. 🥥🍫", image: "/assets/ovo_prestigio.jpeg" }
        ]
    }
]

export function Gallery() {
    return(
        <section id="gallery" className="w-full">
            <style jsx global>{`
                .swiper-button-next, .swiper-button-prev {
                    color: #fa628a !important; 
                    transform: scale(0.6);      
                    z-index: 99;                
                }

                .swiper-button-prev {
                    left: -10px !important; 
                }

                .swiper-button-next {
                    right: -10px !important;   
                    cursor: pointer !important;
                }

                .swiper {
                    overflow: hidden; 
                }
            `}</style>
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Nossas <span className="text-brand-pink-strong font-dancing" >Delícias</span></h2>

                {categories.map((category, index) => (
                    <div key={index} className="mb-16">
                        <h3 className="text-2xl font-semibold mb-6 text-gray-700 border-b-2 border-brand-pink-light inline-block">
                            {category.name}
                        </h3>

                        <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 4000, disableOnInteraction: false }}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                                1280: { slidesPerView: 4 },
                            }}
                        >
                            {category.products.map((product) => (
                                <SwiperSlide key={product.id} className="h-auto">
                                    <Card
                                    title={product.title}
                                    description={product.description}
                                    imageSrc={product.image}
                                    className="h-full border border-pink-100 flex flex-col"
                                    button={true}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                ))}
            </div>
        </section>
    );
}