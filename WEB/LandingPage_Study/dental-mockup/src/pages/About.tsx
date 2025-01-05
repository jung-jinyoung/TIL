import React from "react";

interface DoctorProfileProps {
  name: string;
  title: string;
  imageSrc: string;
  specialties: string[];
  education: string[];
  experience: string[];
}

const DoctorProfile: React.FC<DoctorProfileProps> = ({
  name,
  title,
  imageSrc,
  specialties,
  education,
  experience,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={imageSrc} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">{name}</h2>
        <h3 className="text-xl text-gray-600 mb-4">{title}</h3>

        <h4 className="text-lg font-semibold mb-2">전문 분야</h4>
        <ul className="list-disc list-inside mb-4">
          {specialties.map((specialty, index) => (
            <li key={index}>{specialty}</li>
          ))}
        </ul>

        <h4 className="text-lg font-semibold mb-2">학력</h4>
        <ul className="list-disc list-inside mb-4">
          {education.map((edu, index) => (
            <li key={index}>{edu}</li>
          ))}
        </ul>

        <h4 className="text-lg font-semibold mb-2">경력</h4>
        <ul className="list-disc list-inside">
          {experience.map((exp, index) => (
            <li key={index}>{exp}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const About: React.FC = () => {
  return (
    <main className="flex-grow py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold mb-8 text-center">의료진 소개</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <DoctorProfile
            name="김철수"
            title="대표원장"
            imageSrc="https://images.unsplash.com/photo-1663755787934-3742b0f5983a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTc0fHwlRUMlQjklOTglRUElQjMlQkMlRUMlOUQlOTglRUMlODIlQUN8ZW58MHx8MHx8fDI%3D"
            specialties={["임플란트", "치아교정"]}
            education={[
              "서울대학교 치의학과 졸업",
              "미국 UCLA 치과대학 임플란트 과정 수료",
              "대한치과교정학회 정회원",
            ]}
            experience={[
              "2010 - 현재: 미소 치과 대표원장",
              "2005 - 2010: 서울 중앙 치과 원장",
              "2000 - 2005: 서울대학교 치과병원 전문의",
            ]}
          />
          <DoctorProfile
            name="이영희"
            title="전문의"
            imageSrc="https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            specialties={["치주치료", "미용치과"]}
            education={[
              "연세대학교 치의학과 졸업",
              "연세대학교 대학원 치주과 석사",
              "대한치주과학회 정회원",
            ]}
            experience={[
              "2015 - 현재: 미소 치과 전문의",
              "2010 - 2015: 연세 미래 치과 원장",
              "2005 - 2010: 연세대학교 치과병원 전문의",
            ]}
          />
        </div>
      </div>
    </main>
  );
};
