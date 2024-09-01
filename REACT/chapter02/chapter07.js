// 5가지의 배열 요소 순회 및 탐색 메서드

// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
// 모든 요소를 순회하면서, 콜백 함수로 원하는 동작을 적용시킬 수 잇따.
let arr1 = [1, 2, 3];
arr1.forEach(function (item, idx, arr) {
  console.log(idx, item * 2);
});

let doubledArr = [];
arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드

let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10); // false
let isInclude2 = arr2.includes(1); // true

// 3. indexOf
// 특정 요소의 인덱스를 찾아서 반환하는 메서드

let arr3 = [1, 2, 3];
let index = arr3.indexOf(1); // 0 반환
// let index = arr3.indexOf(10);
// -1 반환 : 존재하지 않는 값의 위치를 찾을 때

let arr4 = [2, 2, 2];
let index2 = arr4.indexOf(2); // 0 반환 -> 가장 첫번째에 있는 위치

// 4. findIndex
// 모든 요소를 순회하면서 콜백 함수를 만족하는
// 특정 요소의 인덱스를 반환하는 메서드

let arr5 = [1, 2, 3];
const findIndex = arr4.findIndex((item) => {
  if (item === 2) {
    return true;
  }
});
// 1 출력 (조건에 만족하는 가장 첫번째 위치)

// 간단한 표현

const findeIndex = arr4.findIndex((item) => item % 2 !== 0);

// indexOf : // 얕은 비교를 통해 이루어지기 떄문에 객체 안에 존재하는 값을 찾지 못함 (원시타입 최적화)
// findIndex : // 모든 요소를 순회하며 콜백 함수의 조건을 적용 -> 깊은 비교 : 객체 타입 가능

let objectArr = [{ name: "정진영" }, { name: "이정환" }];

console.log(objectArr.indexOf({ name: "이정환" })); // -1 출력 ->  객체 안의 값까지 비교하지 못함
console.log(objectArr.findIndex((item) => item.name == "이정환")); // 1 반환

// 5. find
// 모든 요소를 순회하면서 콜백 한수를 만족하는 요소를 찾아
// 그대로 반환

let arr6 = [{ name: "정진영" }, { name: "홍길동" }];

console.log(arr6.find((item) => item.name == "정진영")); // {name: '정진영'} 반환
