"use client";

import { useState } from "react";
import Image from "next/image";
import Hat  from "@/public/assets/chef-hat.png"
import { BurgerButton } from "../../ui/BurguerButton";

export function Navbar() {
    const [open, setOpen] = useState(false);

    const closeMenu = () => setOpen(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Sobre mim", href: "#about" },
        { name: "Galeria", href: "#gallery" },
        { name: "Contato", href: "#contact" },
    ];

    return(
        <header className="fixed top-0 left-0 w-full bg-brand-pink z-50 shadow-sm">
            <nav className="container m-auto flex items-center justify-between h-14">
                <a href="#home" className="flex items-center gap-2 text-2xl z-10">
                    <Image src={Hat} alt="Chef hat" width={24} height={24} />
                    <span className="font-bold text-gray-800">Chef</span>
                    <span className="font-dancing text-[#db2777]">Julya</span>
                </a>
                <div className="md:hidden">
                    <BurgerButton open={open} onToggle={() => setOpen(!open)} />
                </div>
                <ul className={`
                    absolute top-[15px] left-0 w-full h-screen bg-brand-pink flex flex-col justify-center items-center gap-5 py-4 transition-all duration-300
                    md:static md:flex-row md:w-auto md:py-0 md:bg-transparent md:gap-8
                    ${open ? "opacity-100 visible" : "opacity-0 invisible md:visible md:opacity-100"}
                `}>
                    {navLinks.map((link) => (
                        <li key={link.href} className="w-full text-center md:w-auto">
                            <a 
                            href={link.href}
                            onClick={closeMenu}
                            className="
                                block w-full py-3 px-8 text-center text-gray-800 font-medium
                                    hover:bg-[#f9a8d4] hover:text-[#db2777] 
                                    transition-colors duration-200
                                    md:inline-block md:py-2 md:px-4 md:rounded-md md:hover:bg-transparent
                            "
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}