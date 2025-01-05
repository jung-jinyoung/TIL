// 5가지 배열 변형 메섣

// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: "정진영", hobby: "테니스" },
  { name: "홍길동", hobby: "테니스" },
  { name: "고길동", hobby: "독서" },
];

let tennisPeople = arr1.filter((item) => item.hobby === "테니스");
console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백 함수 실행
// 그 결과값들을 모아서 새로운 배열로 반환

let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});
console.log(mapResult1);

let names = arr1.map((item) => item.name);
console.log(names);

// 3. sort
// 사전 순으로 배열의 값들을 정렬하는 메서드

let arr3 = ["b", "c", "a"];
arr3.sort();

// 숫자로만 이루어진 배열에는 적용되지 않음
// 숫자의 대소 비교를 통해 이루어지지 않음

let arr4 = [4, 1, 3];
arr4.sort((a, b) => {
  if (a > b) {
    // a 가 더 크다면 앞에 위치
    return 1;
  } else if (a < b) {
    // 작다면 뒤에 위치
    return -1;
  } else {
    // 값이 같다면 위치 변동 X
    return 0;
  }
});

// 4. toSorted
// 정렬된 새로운 배열을 반환하는 메서드 (최신)
// 기존 배열을 정렬시키지 않는다.

let arr7 = ["b", "c", "a"];
let sorted = arr7.toSorted();

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드

let arr8 = ["hi", "im", "jinyoung"];
console.log(arr8.join()); // seperator : 연결에 붙이고 싶은 문자
