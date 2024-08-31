// 1. 배열의 구조 분해 할당

let arr = [1, 2, 3];

let [one, two, thre, four = 4] = arr;
// 만약에 값이 없을 경우 default 값을 지정해줄 수 있음

let [one2, two2] = arr;
// arr 개수만큼 하지 않아도 할당 될 수 있다.
console.log(one);
console.log(two);

//2.  객체의 구조 분해 할당
let person = {
  name: "정진영",
  age: 27, // 다른 변수에도 할당할 수 있다.
  hobby: "테니스",
};

let { name, age: myAge, hobby, extra = "hello" } = person;

console.log(name, myAge, hobby, extra);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법 (활용)

const func = ({ name, age, hobby }) => {
  //객체를 인자로 하여 매개변수로 구조 분해 할당을 받을 수 있음
  console.log(name, age, hobby);
};

func(person);
