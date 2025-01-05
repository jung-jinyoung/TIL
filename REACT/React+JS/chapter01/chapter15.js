// 1. 객체 생성
let object1 = new Object(); // 객체 생성자(내장함수) 사용
let object2 = {}; // 객체 리터럴 사용

// 2. 객체 프로퍼티 (객체 속성 -> key : value 로 구성)
let person = {
  name: "정진영",
  age: 30,
  hobby: "테니스",
  10: 20,
  "like cat": true, // 띄어쓰기가 포함된 문자열이 key 값일 경우 "" 사용
};

// 3. 객체 프로퍼티 다루는 방법
// 3-1. 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)

// 간결한 문법
let name = person.name;
console.log(name);
// 존재하지 않는 프로퍼티 접근 -> undefined 출력

let age = person["age"]; // 문자열 -> "" 접근 , 없을 경우 에러
console.log(age);

// 동적으로 프로퍼티에 접근해야 할 경우 -> 괄호 표기법
let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 3-2. 새로운 프로퍼티를 추가하는 방법(점 표기법, 괄호 표기법)
person.job = "FE Developer";
person["favoriteFood"] = "커피";

// 3-3. 프로퍼티 수정
person.job = "educator";

// 3-4. 프로퍼티 삭제 (delete 연산자 사용)
delete person.job;
console.log(person);

// 3-5. 프로퍼티 존재 유무를 확인하는 방법 (in 연산자)

let result1 = "name" in person;
console.log(result1);

let result2 = "cat" in person;
console.log(result2);
