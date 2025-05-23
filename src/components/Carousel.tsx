"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const images = [
  "/PHOTO_BOIS/caroussel/ImageCreations/expo5.jpg",
  "/PHOTO_BOIS/caroussel/ImageCreations/pot.jpg",
  "/PHOTO_BOIS/caroussel/ImageCreations/bol.jpg",
  "/PHOTO_BOIS/caroussel/ImageCreations/expo4.jpg",
  "/PHOTO_BOIS/caroussel/ImageCreations/expo3.jpg",
  "/PHOTO_BOIS/caroussel/ImageCreations/expo2.jpg",
  "/PHOTO_BOIS/caroussel/ImageCreations/expo.jpg",
  "/PHOTO_BOIS/caroussel/ImageCreations/cuillière.jpg",
  "/PHOTO_BOIS/caroussel/ImageCreations/coquetier.jpg",
  "/PHOTO_BOIS/caroussel/ImageCreations/assiete.jpg",
  "/PHOTO_BOIS/caroussel/ImageCreations/coupefruit2.jpg",
  "/PHOTO_BOIS/caroussel/ImageCreations/coupefruit.jpg",
  "/PHOTO_BOIS/caroussel/ImageCreations/support5.jpg",
  "/PHOTO_BOIS/caroussel/ImageCreations/support4.jpg",
  "/PHOTO_BOIS/caroussel/ImageCreations/support3.jpg",
  "/PHOTO_BOIS/caroussel/ImageCreations/assietes.jpg",
  "/PHOTO_BOIS/caroussel/ImageCreations/support2.jpg",
  "/PHOTO_BOIS/caroussel/ImageCreations/support.jpg",
  "/PHOTO_BOIS/caroussel/ImageCreations/videpoche.jpg",
  "/PHOTO_BOIS/caroussel/ImageCreations/sign.jpg",
  "/PHOTO_BOIS/caroussel/ImageCreations/toupie.jpg",
  "/PHOTO_BOIS/caroussel/imagesBols/8.jpg",
  "/PHOTO_BOIS/caroussel/imagesCuisine/20a.jpg",
  "/PHOTO_BOIS/caroussel/imagesCuisine/22.jpg",
  "/PHOTO_BOIS/caroussel/imagesCuisine/Assiette.jpg",
  "/PHOTO_BOIS/caroussel/imagesCuisine/b1.jpg",
  "/PHOTO_BOIS/caroussel/imagesCuisine/Camembert.jpg",
  "/PHOTO_BOIS/caroussel/imagesCuisine/MiniAssiette.jpg",
  "/PHOTO_BOIS/caroussel/imagesCuisine/mortier.jpg",
  "/PHOTO_BOIS/caroussel/imagesVidepoche/11.jpg",
  "/PHOTO_BOIS/caroussel/imagesVidepoche/12.jpg",
  "/PHOTO_BOIS/caroussel/imagesVidepoche/13.jpg",
  "/PHOTO_BOIS/caroussel/imagesVidepoche/14a.jpg",
  "/PHOTO_BOIS/caroussel/imagesVidepoche/15a.jpg",
  "/PHOTO_BOIS/caroussel/imagesVidepoche/16a.jpg",
  "/PHOTO_BOIS/caroussel/imagesVidepoche/26.jpg",
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  return (
    <div className="w-full max-w-5xl mx-auto relative overflow-hidden rounded-xl shadow-lg bg-black h-[32rem]">
      {images.map((img, idx) => (
        <Image
          key={img}
          src={img}
          alt={`Création ${idx + 1}`}
          fill
          style={{ objectFit: "contain", transition: "opacity 0.7s" }}
          className={`transition-opacity duration-700 absolute top-0 left-0 ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
    </div>
  );
};

export default Carousel;
