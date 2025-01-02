import React from 'react';
import { UtensilsCrossed } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="고급스러운 카페 인테리어"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        <UtensilsCrossed className="w-12 h-12 mb-6" />
        <h1 className="text-5xl md:text-7xl font-bold mb-4">마일드 브런치</h1>
        <p className="text-xl md:text-2xl mb-8 text-center">
          청담동의 여유로운 브런치 다이닝
        </p>
        <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-opacity-90 transition">
          메뉴 보기
        </button>
      </div>
    </div>
  );
}