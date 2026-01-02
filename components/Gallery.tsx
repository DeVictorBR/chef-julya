"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Card } from "./Card";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Product = {
    id: number,
    title: string,
    description: string,
    image: string
}


const products: Product[] = [
    {
        id: 1,
        title: "Bolo de laranja",
        description: "Feito com carinho",
        image: "/assets/bolo1.avif"
    },
    {
        id: 2,
        title: "Bolo de Cenoura",
        description: "Feito com carinho",
        image: "/assets/bolo2.avif"
    }
] 

export function Gallery() {
    return(
        <section id="gallery" className="w-full">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Nossas <span className="text-brand-pink-strong font-dancing" >Delícias</span></h2>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        768: {
                            slidesPerView: 3
                        },
                    }}
                    className="pb-12"
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <Card
                            title={product.title}
                            description={product.description}
                            imageSrc={product.image}
                            className="h-full border border-pink-100"
                            >
                                <button className="mt-auto bg-brand-pink-strong text-white py-2 rounded-lg font-bold hover:brightness-110 transition-all">Saber mais</button>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}