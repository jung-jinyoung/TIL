// 스코프

// 전역 스코프 : 전체 영역에서만 접근 가능하다.
// 지역 스코프 : 특정 영역에서만 접근 가능하다.

let a = 1; // 전역 스코프
function funcA() {
  let b = 2; // 지역 스코프 (함수 내부에서만 접근 가능 )
  console.log(a);
}

// Reference Error
// console.log(b)

function funcB() {
  function funcC() {
    console.log("function C");
  }
}

// Reference Error
// funcC();
