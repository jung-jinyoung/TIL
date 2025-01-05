import React from 'react';

export default function Events() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">스페셜 이벤트</h2>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="샴페인 브런치"
            className="w-full h-96 object-cover"
          />
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-4">샴페인 브런치</h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              매주 일요일, 프리미엄 샴페인과 함께하는 특별한 브런치를 즐기세요.
              라이브 재즈 공연과 함께 제공되는 시그니처 메뉴들을 무제한으로 맛보실 수 있습니다.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xl font-semibold">1인 85,000원</span>
              <span className="text-gray-500">매주 일요일 11:00 - 15:00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}