import React from "react";
import Image from 'next/image';
import Link from 'next/link';

const ContactSection = () => (
    <section className="w-full max-w-7xl mx-auto flex flex-col items-center bg-[#7c6a58]">
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-12 bg-[#7c6a58] py-12 rounded">
            {/* Image à gauche */}
            <Image
                src="/PHOTO_BOIS/dsc-0125.webp"
                alt="Horaires ouverture"
                width={256}
                height={256}
                className="w-64 h-auto object-contain rounded-xl shadow"
            /> 
            {/* Bloc texte + bouton à droite */}
            <div className="flex-1 max-w-xl flex flex-col items-center md:items-start">
                <h2 className="text-3xl font-bold text-green-200 mb-4">Contactez-moi</h2>
                <p className="text-white text-lg mb-6 text-center md:text-left">
                    Une demande particulière ou une question sur un objet ?<br />
                    N&apos;hésitez pas à me contacter !
                </p>
                <Link
                    href="mailto:ton@email.fr"
                    className="px-6 py-2 border border-green-700 text-white rounded hover:bg-green-700 hover:text-white transition"
                >
                    Me contacter
                </Link>
            </div>
        </div>
        {/* Copyright */}
        <p className="text-center  text-white mt-8 mb-2">Copyright © 2023 Herent Aleksandre</p>
    </section>
);

export default ContactSection; 