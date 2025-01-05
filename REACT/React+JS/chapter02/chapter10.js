console.log(1);
setTimeout(() => {
  console.groupCollapsed(3);
}, 3000); // 비동기 함수 (3초 뒤 콜백함수 실행)
// => Web APIs (자바스크립트 영역 X 브라우저의 영역)
console.log(2);
