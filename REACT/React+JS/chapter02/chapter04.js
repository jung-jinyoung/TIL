// 1. Spread 연산자
// 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할

// 1-1. 배열
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6]; // ... 연산자
console.log(arr2);

// 1-2. 객체

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

console.log(obj2);

// 1-3. 함수 매개변수
function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수
// 나머지 매개변수 => 나머지 모든 인자를 리스트로 묶어서 반환해줌
function funcB(one, ...rest) {
  console.log(one, rest);
}

funcB(...arr1);
