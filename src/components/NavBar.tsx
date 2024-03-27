"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Roboto_Slab } from "next/font/google";

const font = Roboto_Slab({ subsets: ["latin"], weight: "700" });

export default function NavBar() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <span
          id="shadowText"
          className={`${font.className} font-bold self-center whitespace-nowrap text-xl`}
        >
          Ropanidna
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Mi perfil</Dropdown.Item>
          <Dropdown.Item>Productos favoritos</Dropdown.Item>
          <Dropdown.Item>Carrito de compras</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/">Inicio</Navbar.Link>
        <Navbar.Link href="/productos">Productos</Navbar.Link>
        <Navbar.Link href="/categorias">Categorías</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
