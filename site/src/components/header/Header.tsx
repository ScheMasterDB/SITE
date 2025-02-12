"use client";


import Link from "next/link";
 import Image from "next/image";

export default function Header() {


  return (
    <header className="bg-primary text-white flex items-center justify-between px-4 h-20">     
        <Link href="/" className="flex items-center ">
          <Image 
            src="/assets/logo/image-removebg-preview.png" 
            alt="Logo" 
            width={100} 
            height={100} 
            className="rounded-full"
          />
          <h1 className="text-2xl  text-secondary">
            SchemasterDB</h1>
        </Link>
        
       
    </header>
  );
}
