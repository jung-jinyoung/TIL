import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-xl font-bold">미소 치과</h3>
            <p className="mt-2 text-sm">최고의 미소를 선사합니다</p>
          </div>
          <div className="w-full md:w-1/3 text-center mt-4 md:mt-0">
            <p>연락처: 02-1234-5678</p>
            <p>주소: 서울특별시 강남구 테헤란로 123</p>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right mt-4 md:mt-0">
            <p>&copy; 2023 미소 치과. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
