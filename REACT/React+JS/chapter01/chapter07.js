// 연산자1

// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
// 연산자 우선 순위 생각하기

let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2; // 몫
let num5 = 3 % 2; // 결과값

// 3. 복합 대입 연산자
let num7 = 10;
// num7 = num7 + 20;
num7 += 20;
num7 -= 20;
num7 /= 20;
num7 *= 20;

// 4. 증감 연산자
let num8 = 10;
num8++;
++num8;

// 5. 논리 연산자

let or = true || false;
let and = true && false;
let not = !true;

// console.log(or, and, not);
// 출력 : true false false

// 6. 비교 연산자
let com1 = 1 === 2; // 동등 연산자
let com2 = 2 !== 2; // 비 동등 연산자

// == 와 차이 : 자료형 비교  X 값만 비교
// === : 자료형 까지 비교

// 초과, 미만, 이상, 이하
let com3 = 2 > 1;
let com4 = 2 < 1;
