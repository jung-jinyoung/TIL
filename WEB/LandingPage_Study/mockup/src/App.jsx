import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Phone } from "lucide-react";

export default function CafeLanding() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      name: "드립커피 1kg 블렌딩",
      price: "12,000원",
      image: "/placeholder.svg",
    },
    {
      name: "드립커피 1kg 블렌딩",
      price: "12,000원",
      image: "/placeholder.svg",
    },
    {
      name: "드립커피 1kg 블렌딩",
      price: "12,000원",
      image: "/placeholder.svg",
    },
    {
      name: "드립커피 1kg 블렌딩",
      price: "12,000원",
      image: "/placeholder.svg",
    },
    {
      name: "드립커피 1kg 블렌딩",
      price: "12,000원",
      image: "/placeholder.svg",
    },
  ];

  const menuItems = [
    { name: "도넛", image: "/placeholder.svg", price: "3,500원" },
    { name: "샌드위치", image: "/placeholder.svg", price: "6,500원" },
    { name: "와플", image: "/placeholder.svg", price: "5,500원" },
    { name: "베리 타르트", image: "/placeholder.svg", price: "5,500원" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <a href="/" className="text-2xl font-bold">
            DRIPTIC
          </a>
          <nav className="hidden space-x-8 md:flex">
            <a href="#" className="text-sm hover:text-gray-600">
              delicious coffee
            </a>
            <a href="#" className="text-sm hover:text-gray-600">
              about
            </a>
            <a href="#" className="text-sm hover:text-gray-600">
              menu
            </a>
            <a href="#" className="text-sm hover:text-gray-600">
              event
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] w-full">
          <img
            src="coffee.jpeg"
            alt="Delicious Coffee Cups with Latte Art"
            className="h-full w-full object-cover brightness-75"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <div className="mb-4 inline-block rounded-full bg-white/20 px-6 py-2">
              good time happen over
            </div>
            <h1 className="text-5xl font-bold">Delicious Coffee</h1>
          </div>
        </section>

        {/* Menu Grid */}
        <section className="container mx-auto my-16 px-4">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-0 w-full bg-black/50 p-4 text-white">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p>{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Products Carousel */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-3xl font-bold">New Item</h2>
            <div className="relative">
              <div className="flex items-center justify-center gap-8">
                <button
                  onClick={prevSlide}
                  className="absolute left-0 z-10 rounded-full bg-white p-2 shadow-md"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <div className="flex gap-8 overflow-hidden">
                  {products.map((product, index) => (
                    <div
                      key={index}
                      className={`transition-opacity duration-300 ${
                        Math.abs(currentSlide - index) <= 2
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                      style={{
                        transform: `translateX(-${currentSlide * 280}px)`,
                      }}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-[200px] w-[200px] rounded-lg object-cover"
                      />
                      <h3 className="mt-4 text-center font-semibold">
                        {product.name}
                      </h3>
                      <p className="text-center text-gray-600">
                        {product.price}
                      </p>
                    </div>
                  ))}
                </div>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 z-10 rounded-full bg-white p-2 shadow-md"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-900 py-16 text-white">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-3xl font-bold">Contact Us</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex items-center justify-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    <span className="text-xl font-bold">1588-0000</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5" />
                    <address className="not-italic">
                      서울특별시 강남구 테헤란로 123 카페빌딩 1층
                    </address>
                  </div>
                </div>
              </div>
              <div className="h-[300px] overflow-hidden rounded-lg bg-gray-200">
                {/* Map placeholder - You would integrate your preferred map service here */}
                <div className="h-full w-full bg-gray-300" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-white py-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} DRIPTIC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
