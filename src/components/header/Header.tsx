"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@/components/ui/breadcrumb";
import { MdLanguage } from "react-icons/md";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [language, setLanguage] = useState("pt");

  return (
    <header className="bg-primary text-white flex items-center pr-20 h-16 justify-between  sticky top-0 left-0 w-full z-10">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo/image-removebg-preview.png"
            alt="Logo"
            width={100}
            height={100}
            className="rounded-full"
          />
          <h1 className="text-2xl text-secondary">SchemasterDB</h1>
        </Link>
      </div>

      <Breadcrumb className="flex justify-around text-[20px] w-1/2">
        <BreadcrumbItem>
          <BreadcrumbLink href="#home">Início</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#funcionalidades">Funcionalidades</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#sobre">Sobre</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#integrantes">Integrantes</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="bg-primary text-white border-secondary"
          >
            <MdLanguage /> {language.toUpperCase()}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-text text-textDark">
          <DropdownMenuLabel className="text-[#496B75]">
            Selecione o idioma
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-primary" />
          <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
            <DropdownMenuRadioItem value="pt" className="hover:bg-background">
              Português
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="en" className="hover:bg-background">
              Inglês
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="es" className="hover:bg-background">
              Espanhol
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
