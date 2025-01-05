import React from "react";

interface ServiceItemProps {
  title: string;
  description: string;
  imageSrc: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  title,
  description,
  imageSrc,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export const Services: React.FC = () => {
  return (
    <main className="flex-grow py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold mb-8 text-center">진료 안내</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceItem
            title="임플란트"
            description="최신 기술을 활용한 정밀한 임플란트 시술로 자연스러운 치아 기능을 회복해드립니다."
            imageSrc="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=400&h=300"
          />
          <ServiceItem
            title="치아교정"
            description="개인별 맞춤 교정 계획으로 아름답고 건강한 치열을 만들어드립니다."
            imageSrc="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&q=80&w=400&h=300"
          />
          <ServiceItem
            title="치아미백"
            description="안전하고 효과적인 미백 시술로 밝고 화사한 미소를 되찾아드립니다."
            imageSrc="https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUxfHwlRUMlQjklOTglRUElQjMlQkN8ZW58MHx8MHx8fDI%3D"
          />
          <ServiceItem
            title="치주치료"
            description="잇몸 질환의 예방과 치료로 구강 건강의 기초를 튼튼히 합니다."
            imageSrc="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400&h=300"
          />
        </div>

        <div className="mt-12 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">진료 시간</h2>
          <p className="mb-2">평일: 오전 10:00 - 오후 7:00</p>
          <p className="mb-2">토요일: 오전 10:00 - 오후 3:00</p>
          <p className="mb-2">일요일 및 공휴일: 휴진</p>
          <p className="mt-4 text-sm text-gray-600">
            * 점심시간: 오후 1:00 - 오후 2:00
          </p>
        </div>
      </div>
    </main>
  );
};
