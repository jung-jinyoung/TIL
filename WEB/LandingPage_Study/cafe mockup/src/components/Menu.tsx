import React from 'react';
import MenuItem from './MenuItem';

const menuItems = [
  {
    name: "트러플 에그 베네딕트",
    price: "32,000원",
    description: "트러플 홀랜다이즈 소스를 곁들인 수란과 홈메이드 잉글리시 머핀",
    tag: "시그니처",
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    name: "랍스터 아보카도 토스트",
    price: "36,000원",
    description: "신선한 랍스터와 아보카도를 올린 사워도우 토스트",
    tag: "프리미엄",
    image: "https://images.unsplash.com/photo-1603046891744-1f76eb10aec1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    name: "리코타 치즈 팬케이크",
    price: "28,000원",
    description: "수제 리코타 치즈와 계절 과일을 곁들인 폭신한 팬케이크",
    tag: "디저트",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  }
];

export default function Menu() {
  return (
    <section className="py-20 bg-white" id="menu">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">시그니처 메뉴</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <MenuItem key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}