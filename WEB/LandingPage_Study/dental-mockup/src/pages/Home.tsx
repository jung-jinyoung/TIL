import React from "react";

export const Home: React.FC = () => {
  return (
    <main className="flex-grow">
      <section className="relative h-[60vh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="전문적인 치과 진료실"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-center text-black">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            미소 치과에 오신 것을 환영합니다
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            최고의 기술과 정성으로 여러분의 건강한 미소를 지켜드립니다
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-lg">
            지금 예약하기
          </button>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            왜 미소 치과인가요?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">최신 기술</h3>
              <p>
                최첨단 장비와 기술을 활용하여 정확하고 효과적인 진료를
                제공합니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">전문 의료진</h3>
              <p>
                풍부한 경험과 전문 지식을 갖춘 의료진이 맞춤형 진료를
                제공합니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">편안한 환경</h3>
              <p>
                환자의 편안함을 최우선으로 생각하는 친절한 서비스를 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            주요 진료 분야
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=100&h=100"
                alt="임플란트"
                className="w-24 h-24 rounded-full"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">임플란트</h3>
                <p>
                  자연치아와 가장 유사한 인공치아 식립으로 편안한 저작 기능을
                  회복해드립니다.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&q=80&w=100&h=100"
                alt="치아교정"
                className="w-24 h-24 rounded-full"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">치아교정</h3>
                <p>첨단 교정 기술로 아름답고 건강한 치열을 만들어드립니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
