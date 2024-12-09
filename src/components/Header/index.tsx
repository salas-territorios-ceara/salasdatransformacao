"use client"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { MenuItem } from "@/interfaces/menuItem";
import Image from 'next/image'

export function Header() {
  
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const itensMenu: MenuItem[] = [
    {
      text: "Sobre",
      id: "/#",
    },
    {
      text: "Meta",
      id: "/#services",
      link: 'meta'
    },
    {
      text: "Abrangência",
      id: "#premiacoes",
      link: 'abrangencia'
    },
    {
      text: "Agentes de Desenvolvimento",
      id: "#premiacoes",
      link: 'agentes-desenvolvimento'
    },
    {
      text: "Conteúdos  ",
      id: "#premiacoes",
      link: 'conteudos'
    },
  ];

  function onClickOpenMenu() {
    setOpenMenu(!openMenu);
  }

  function onClickCloseMenu() {
    setOpenMenu(false);
  }

  return (
    <header
  className={
    openMenu
      ? "flex-col h-[100vh] items-center justify-center bg-white fixed top-0 left-0 right-0 z-50 shadow-md lg:flex lg:flex-row lg:justify-between"
      : "flex-col items-center justify-center bg-white fixed top-0 left-0 right-0 z-50 shadow-md lg:flex lg:flex-row lg:justify-between lg:pr-24 lg:pl-10 2xl:pr-44"
  }
>

      <div className="flex items-center justify-between pl-4 pr-8 pb-2">
        <Link href="/">
          <div className="h-16 md:h-18 w-44">
          <Image
            src="/assets/images/logo-territorios-esperanca.png"
            width={20}
            height={20}
            layout="responsive"
            alt="Picture of the author"
          />  

          </div>
        </Link>
        <button onClick={onClickOpenMenu} className="lg:hidden">
          {!openMenu ? <GiHamburgerMenu size={35} /> : <IoClose size={35} />}
        </button>
      </div>

      <nav className={openMenu ? "flex lg:flex" : "hidden lg:flex "}>
        <ul className="flex-col ml-8 lg:flex lg:flex-row lg:gap-12">
           {itensMenu.map((item) => (
            <li className="pt-8 lg:pt-0 hover:text-[#54a532]" key={item.id}>
              {
                item.link == null ? (
                  <a
                    href={item.id}
                    onClick={onClickCloseMenu}
                    className="text-xl font-medium"
                  >
                    {item.text}
                  </a>
                ) :
                  <Link
                    href={item.link}
                    onClick={onClickCloseMenu}
                    className="text-xl font-medium"
                  >
                    {item.text}
                  </Link>
              }
            </li>
          ))} 
        </ul>
      </nav>
    </header>
  );
}
