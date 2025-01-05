// 1. Falsy한 값

let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0; // 음수0
let f5 = NaN;
let f6 = ""; // 빈 문자열
let f7 = 0n; // 빅 인티져 -> 큰 값을 저장하는데 사용

if (!f1) {
  console.log("Falsy!");
}

// 2. Truthy한 값
// -> 7가지의 Falsy 한 값들을 제외한 나머지 모든 값
// 주의 : 빈 리스트, 빈 객체, 빈 함수도 True 이다. (파이썬이랑 다름)

// 3. 활용 사례

function printName(person) {
  //   if (person === undefined || person === none) {
  //     console.log("person의 값이 없음");
  //   }

  // Falsy 특성 활용
  if (!person) {
    console.log("person의 값이 없음");
  }
  console.log(person.name);
}

let person = { name: "정진영" };

printName(person);
