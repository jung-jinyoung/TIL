// 연산자2.

// 1. null 병합 연산자
// 존재하는 값을 추려내는 기능
// null, undefined 가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
// console.log(var4); // var2 출력

let var5 = var2 ?? var3; // 먼저 작성된 var2 출력

let username = "정진영";
let userNickName = "jignonne";
let displayName = username ?? userNickName;
console.log(displayName); // 이름이나 닉네임 둘 중에 하나라도 있을 경우 출력한다.

// 2. typeof 연산자
// 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var6 = 1;
// let var6 = "hello";
// let var6 = true;

let t1 = typeof var6;
// "number"
// string
// boolean

// 3. 삼항 연산자
// 항을 3개 사용하는 연산자
// 조건식을 이용하여 참, 거짓일 때 다른 값을 반환함

let var8 = 10;
let res = var8 % 2 === 0 ? "짝수" : "홀수";
// "짝수" 출력
