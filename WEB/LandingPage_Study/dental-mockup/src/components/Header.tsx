import React from "react";

interface HeaderProps {
  setCurrentPage: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ setCurrentPage }) => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <button
            onClick={() => setCurrentPage("home")}
            className="text-2xl font-bold text-gray-800"
          >
            미소 치과
          </button>
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setCurrentPage("about")}
              className="text-gray-700 hover:text-blue-500"
            >
              의료진 소개
            </button>
            <button
              onClick={() => setCurrentPage("services")}
              className="text-gray-700 hover:text-blue-500"
            >
              진료 안내
            </button>
            <button
              onClick={() => setCurrentPage("contact")}
              className="text-gray-700 hover:text-blue-500"
            >
              예약하기
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
