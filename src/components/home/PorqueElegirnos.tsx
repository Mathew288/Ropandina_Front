"use client";
import { PORQUE_ELEGIRNOS } from "@/helpers/constants/Porque_elegirnos";
import { Card } from "flowbite-react";

export default function PorqueElegirnos() {
  return (
    <>
      <h2 className="text-3xl font-bold my-5">¿Por qué elegirnos?</h2>
      <section
        id="por_que_elegirnos"
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {PORQUE_ELEGIRNOS.items.map((item, i) => {
          return (
            <Card key={i} className={`p-5 rounded hover:bg-green-200`}>                
              <h3 className={`text-2xl font-bold tracking-tight`}>
                {item.titulo}
              </h3>
              <p className="font-normal text-gray-700">{item.contenido}</p>
            </Card>
          );
        })}
      </section>
    </>
  );
}
