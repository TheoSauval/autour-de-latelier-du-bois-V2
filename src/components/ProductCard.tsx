import React from "react";
import Image from 'next/image';

interface ProductCardProps {
    image: string;
    title: string;
    available?: boolean;
    description: string;
    price: string;
}

const ProductCard = ({ image, title, available = true, description, price }: ProductCardProps) => (
    <div className="bg-[#d3ffe6] rounded-xl shadow-lg p-5 flex flex-col items-start gap-3 max-w-xs mx-auto min-h-[420px]">
        <Image src={image} alt={title} width={400} height={288} className="w-full h-60 object-cover rounded-lg mb-2 " />
        <div className="flex items-center gap-2 mb-1">
            <h3 className="text-2xl font-bold text-green-800">{title}</h3>
            {available && (
                <span className="bg-green-700 text-white text-xs font-semibold px-2 py-1 rounded ml-2">disponible</span>
            )}
        </div>
        <p className="text-gray-700 text-base flex-1">{description}</p>
        <div className="mt-2 text-xl font-bold text-green-700">{price}</div>
    </div>
);

export default ProductCard; 