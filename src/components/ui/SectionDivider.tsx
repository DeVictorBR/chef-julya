"use client"

import Image from "next/image";

export function SectionDivider() {
    return (
        <div className="my-16 flex items-center justify-center gap-4">
            <span className="h-[2px] w-full max-w-xs bg-brand-pink-soft rounded" />
            <Image
                src="/assets/gravata-borboleta.png"
                alt="Divisor"
                width={30}
                height={30}
            />
            <span className="h-[2px] w-full max-w-xs bg-brand-pink-soft rounded" />
        </div>
    );
}