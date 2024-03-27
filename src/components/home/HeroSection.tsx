"use client"
import { Button } from "flowbite-react";
import Image from "next/image";

const heroText = "Sumérgete en la belleza y la tradición de la moda andina con nuestra colección exclusiva. Desde las majestuosas montañas hasta los vibrantes colores de nuestra cultura, cada pieza cuenta una historia única. ¡Viste con estilo y apoya a las comunidades andinas! ¡Explora ahora nuestra colección y lleva contigo un pedacito de los Andes!";

export default function HeroSection() {
  return (
    <section className="flex mb-24">
      <div className="w-[50%]">
        <h1 className="text-5xl text-green-500 font-bold mb-4">
          Ropa de calidad, directamente de Los Andes.
        </h1>
        <p className="text-xl text-justify mb-8 leading-tight p-2 rounded-md">
          {heroText}
        </p>
        <Button>Ver ofertas</Button>
      </div>
      <div className="w-[50%] flex items-center justify-center">
        <Image
          src={require("@/public/hero.svg")}
          alt="Imagen de héroe"
          width={500}
          height={500}          
        />
      </div>
    </section>
  );
}