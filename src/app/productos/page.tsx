"use client"
import { FloatingLabel } from "flowbite-react";
import { useState } from "react";

export default function productos() {
  const [productosInput, setproductosInput] = useState("");

  return (
    <main className="p-20">
      <h1 className="my-5 font-bold">Productos</h1>
      <FloatingLabel
        label={"Buscar productos"}
        variant={"standard"}
        value={productosInput}
        color={"default"}
        onChange={(e) => setproductosInput(e.target.value)}
      />
        {productosInput}
    </main>
  );
}
