/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // src 폴더 내의 모든 파일을 포함
    "./public/index.html", // public 폴더 내의 index.html도 포함 (HTML 파일이 있는 경우)
    "./src/index.css", // index.css 포함
    "./src/App.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
