"use client";
import { useEffect, useState } from "react";

const textes = [
    "Réparation de meubles (si possible)",
    "Sciage jusqu&apos;à 24cm de long",
    "Rabotage et dégauchissage jusqu&apos;à 12cm",
    "Tournage sur bois",
    "Gravure fractale (Fractal de lichtenberg)",
    "Gravure sur bois",
];

export default function Typewriter() {
    const [textIndex, setTextIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const fullText = textes[textIndex];

        if (!isDeleting && displayed.length < fullText.length) {
            timeout = setTimeout(() => {
                setDisplayed(fullText.slice(0, displayed.length + 1));
            }, 80);
        } else if (isDeleting && displayed.length > 0) {
            timeout = setTimeout(() => {
                setDisplayed(fullText.slice(0, displayed.length - 1));
            }, 40);
        } else if (!isDeleting && displayed.length === fullText.length) {
            timeout = setTimeout(() => setIsDeleting(true), 1200);
        } else if (isDeleting && displayed.length === 0) {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % textes.length);
        }
        return () => clearTimeout(timeout);
    }, [displayed, isDeleting, textIndex]);

    return (
        <span className="text-4xl font-bold text-green-200 font-mono">
            {displayed}
            <span className="animate-pulse text-black">|</span>
        </span>
    );
} 