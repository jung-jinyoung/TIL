import React from 'react';

interface MenuItemProps {
  name: string;
  price: string;
  description: string;
  tag: string;
  image: string;
}

export default function MenuItem({ name, price, description, tag, image }: MenuItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm mb-4">
          {tag}
        </span>
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-2xl font-bold">{price}</p>
      </div>
    </div>
  );
}