"use client"
import { Card } from "./Card";

export function About() {
    return(
        <Card
        title="Chef Julya"
        description="Apaixonada por doces e bolos desde pequena, Julya transformava ingredientes simples em verdadeiras obras de arte. O que começou como um hobby se tornou sua vocação. Dedicada a essa arte, ela aprimorou suas técnicas com cursos e muita prática."
        id="about"
        imageSrc="/assets/chef-julya.png"
        imageAlt="Foto da Chef Julya com seu traje de confeiteira"
        className="md:flex-row"
        />
    );
}