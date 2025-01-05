import React from 'react';
import { ShoppingBag } from 'lucide-react';

const merchandise = [
  {
    name: "시그니처 블렌드 원두",
    price: "38,000원",
    description: "에티오피아 예가체프와 과테말라 안티구아를 블렌딩한 프리미엄 원두",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    name: "골드 림 세라믹 머그",
    price: "42,000원",
    description: "수제작 도자기에 골드 림으로 포인트를 준 프리미엄 머그",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    name: "린넨 에이프런",
    price: "68,000원",
    description: "프리미엄 린넨 소재의 심플하고 세련된 디자인의 에이프런",
    image: "https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  }
];

export default function Goods() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-12">
          <ShoppingBag className="w-8 h-8" />
          <h2 className="text-4xl font-bold text-center">라이프스타일 굿즈</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {merchandise.map((item) => (
            <div key={item.name} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-80 object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <p className="text-xl text-gray-900">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}