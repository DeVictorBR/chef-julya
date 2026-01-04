"use client"

import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Hat from "@/public/assets/chef-hat.png";

export function Footer() {
    return (
        <footer id="contact" className="bg-brand-pink/20 border-t border-brand-pink-soft pt-12 pb-6">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
                    
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <div className="flex items-center gap-2 text-2xl">
                            <Image src={Hat} alt="Chef hat" width={24} height={24} />
                            <span className="font-bold text-gray-800">Chef</span>
                            <span className="font-dancing text-brand-pink-strong text-3xl">Julya</span>
                        </div>
                        <p className="text-gray-600 max-w-xs">
                            Transformando momentos simples em memórias inesquecíveis através da confeitaria artesanal.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-start gap-4">
                        <h4 className="font-bold text-gray-800 text-lg uppercase tracking-wider">Contato</h4>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-center gap-3 justify-center md:justify-start">
                                <Instagram className="text-brand-pink-strong w-5 h-5" />
                                <a href="https://instagram.com/chef.julya" target="_blank" className="hover:text-brand-pink-strong transition">@chefjulya</a>
                            </li>
                            <li className="flex items-center gap-3 justify-center md:justify-start">
                                <Phone className="text-brand-pink-strong w-5 h-5" />
                                <span>(11) 94540-6865</span>
                            </li>
                            <li className="flex items-center gap-3 justify-center md:justify-start">
                                <Mail className="text-brand-pink-strong w-5 h-5" />
                                <span>contato@chefjulya.com</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center md:items-start gap-4">
                        <h4 className="font-bold text-gray-800 text-lg uppercase tracking-wider">Atendimento</h4>
                        <div className="flex items-center gap-3 text-gray-600">
                            <MapPin className="text-brand-pink-strong w-5 h-5" />
                            <span>Guarulhos, SP - Brasil</span>
                        </div>

                        <div className="mt-2 p-3 bg-white rounded-lg border border-brand-pink shadow-sm">
                            <p className="text-xs text-gray-500 italic">
                                "Em breve: Atendimento inteligente 24h para pedidos personalizados!"
                            </p>
                        </div>
                    </div>
                </div>

                <hr className="my-10 border-brand-pink-soft" />

                <div className="text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Chef Julya Confeitaria. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}