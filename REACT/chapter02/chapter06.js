// 6가지의 배열 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드

let arr1 = [1, 2, 3];
arr1.push(4);
const newLength = arr1.push(5, 6, 7); // 한번에 여러개 추가 가능

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
const poppedItem = arr1.pop();
// 7 반환

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거 , 반환

let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift(); // 1 반환

// 4. unshifted
// push와는 다르게 배열의 맨 앞에 요소를 추가
let arr4 = [1, 2, 3];
arr4.unshift(0);

// shift, unshifted 는 인덱스를 다시 할당해주는 비효율적인 방식

// 5. slice
// 마치 가위 처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환

let arr5 = [1, 2, 3, 4, 5];
let newLength2 = arr5.slice(2, 5); // slice(s,t) =? s~t-1 까지 슬라이스
let newarr = arr5.slice(2);
let newarr2 = arr5.slice(-3);
// 원본 배열에는 영향을 끼치지 않는다.

// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
// spread 최신 문법 -> 이전부터 사용해온 방식인 concat

let arr6 = [1, 2];
let arr7 = [3, 4];

let concatArr = arr6.concat(arr7);
