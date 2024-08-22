// 1. 콜백함수
function main(value) {
  console.log(1);
  console.log(2);
  value(); // 원하는 타이밍에 콜백 함수 호출 가능
}

function sub() {
  console.log("I am sub.");
}

main(sub);

// 2. 콜백 함수 활용

function reapeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    // console.log(idx);
    callback(idx);
  }
}

// 중복 코드를 효율적으로 사용할 수 있도록
// 콜백 함수를 인자로 전달해준다.

reapeat(5, function (idx) {
  console.log(idx);
});

reapeat(5, function (idx) {
  console.log(idx * 2);
});
reapeat(5, (idx) => {
  console.log(idx * 3);
});
