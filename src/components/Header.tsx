import React from "react";
import Logo from "./Logo";
import Link from 'next/link';
import Image from 'next/image';

const Header = () => (
    <div className="relative w-full max-w-7xl mx-auto h-[600px] flex flex-col items-center justify-center">
        {/* Image de fond */}
        // ... existing code ...
        <Image
            src="/PHOTO_BOIS/banner.webp"
            alt="Photo du magasin"
            width={1200}
            height={400}
            className="w-full h-full object-cover object-[center_45%] shadow-lg absolute top-0 left-0 z-0 rounded-none"
        />
        {/* Logo */}
        <div className="absolute left-1/2 top-8 -translate-x-1/2 flex flex-col items-center z-10">
            <Image src="/PHOTO_BOIS/font_logo.png" alt="Logo" width={288} height={288} className="absolute top-0 left-0 w-72 h-w-72 object-contain " />
            <Logo />
        </div>

        {/* Titre et sous-titre */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/4 flex flex-col items-center z-10">
            <h1 className="text-7xl font-bold text-white text-center drop-shadow-lg">Autour de</h1>
            <h2 className="text-4xl text-white text-center drop-shadow">l&apos;atelier du bois</h2>
        </div>
        {/* Navbar */}
        <nav className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-row flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:gap-x-8 sm:gap-y-2 bg-white/70 rounded-full px-2 sm:px-8 py-1 shadow z-10 backdrop-blur-md w-[90vw] max-w-2xl">
            <Link href="/" className="text-green-900 text-base sm:text-lg font-normal hover:underline hover:underline-offset-4 transition whitespace-nowrap">Accueil</Link>
            <Link href="/produits" className="text-green-900 text-base sm:text-lg font-normal hover:underline hover:underline-offset-4 transition whitespace-nowrap">Produits</Link>
            <Link href="/mescreation" className="text-green-900 text-base sm:text-lg font-normal hover:underline hover:underline-offset-4 transition whitespace-nowrap">Mes créations</Link>
            <Link href="/apropos" className="text-green-900 text-base sm:text-lg font-normal hover:underline hover:underline-offset-4 transition whitespace-nowrap">À propos de l&apos;atelier</Link>
            <Link href="/contact" className="text-green-900 text-base sm:text-lg font-normal hover:underline hover:underline-offset-4 transition whitespace-nowrap">Contact</Link>
        </nav>
    </div>
);

export default Header;