// 1. 배열 순회
let arr = [1, 2, 3];

// 1-1. 인덱스 순회
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 1-2. for of 반복문
// 오직 배열을 순회하기위해서 사용되는 특별한 반복문

let arr2 = [4, 5, 6, 7];
for (let item of arr2) {
  console.log(item);
}

// 성능차이는 크게 안난다.
// 인덱스로 접근 하냐 안하냐 차이

// 2. 객체 순회
let person = {
  name: "정진영",
  age: 30,
  hobby: "테니스",
};

// 2-1. Object.keys 사용
// 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
// console.log(keys); //['name', 'age', 'hobby']

for (let key of keys) {
  console.log(key);
  const value = person[key];
  console.log(value);
}

// 2-2. Object.values 사용
// 객체에서 value 값들만 뽑아서 새로운 배열로 반환

let values = Object.values(person);
for (let value of values) {
  console.log(value);
}

// 2-3. for in
// 객체 순회만을 위해 존재하는 순회법

for (let key in person) {
  console.log(key);
}
