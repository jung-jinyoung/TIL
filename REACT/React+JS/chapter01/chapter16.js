// 1. 상수 객체

const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

// 상수 프로퍼티의 값을 추가, 수정, 삭제는 가능
// 상수값에 새로운 객체를 할은 불가
// const animal = {a:2}  -> 에러 발생

animal.age = 2;
animal.type = "강아지";
animal.name = "쭌돌맨";
animal.say = "멍멍!";
console.log(animal);

// 2. 메서드
// 값이 함수인 프로퍼티를 말함

const person = {
  name: "정진영",
  sayHi: function () {
    console.log("하이!");
  },
  // 메서드 선언
  sayBi() {
    console.log("바이!");
  },
};

person.sayHi(); // 메서드를 호출하는 것이기 때문에 () 사용
person["sayBi"]();
