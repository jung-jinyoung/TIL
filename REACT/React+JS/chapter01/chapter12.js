// 1. 함수 표현식

let varA = function funcA() {
  console.log("func A");
};

// varA();

// 함수명 생략 가능
let varB = function () {
  console.log("func B");
};

// varB();

// 2. 화살표 함수 : 함수 표현을 더 간단하고 빠르게

let varC = () => {
  return 1;
};

// 반환 함수면 모두 생략 가능
let varD = () => 1;
let varE = (value) => value + 1;
