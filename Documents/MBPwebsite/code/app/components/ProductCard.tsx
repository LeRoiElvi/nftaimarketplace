/**
 * Luxury ProductCard component for displaying perfume products
 * Features hover lift effect, elegant typography, and responsive design
 */

import React from "react";
import Image from "next/image";

interface ProductCardProps {
  image: string;
  name: string;
  collection: string;
  price: number;
  onClick?: () => void;
  className?: string;
}

export default function ProductCard({
  image,
  name,
  collection,
  price,
  onClick,
  className = "",
}: ProductCardProps) {
  return (
    <div
      onClick={onClick}
      className={`group relative bg-background-secondary rounded-xl overflow-hidden transition-all duration-500 ease-out cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 ${className}`}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-background-tertiary">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-2">
        {/* Collection Name */}
        <p className="text-text-muted text-sm font-normal uppercase tracking-widest">
          {collection}
        </p>

        {/* Product Name */}
        <h3 className="text-text-primary text-xl font-semibold leading-tight group-hover:text-accent transition-colors duration-300">
          {name}
        </h3>

        {/* Price */}
        <div className="pt-2 flex items-baseline gap-1">
          <span className="text-text-primary text-2xl font-bold">
            ${price.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Accent Border on Hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-xl transition-colors duration-500 pointer-events-none" />
    </div>
  );
}
