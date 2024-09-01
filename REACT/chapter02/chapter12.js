const promise = new Promise((resolve, reject) => {
  // 비동기 작업 실행하는 함수
  // executor
  // resolve 함수와 reject 함수에 결과값 전달 가능

  setTimeout(() => {
    console.log("안녕?");
    // resolve("안녕?"); // Result 값으로 전달
    // reject("왜 실패했는지 이유");
  }, 2000);
});

// setTimeout(() => {
//   console.log(promise);
// }, 2000);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // const num = 10 ;
    const num = null;
    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num 이 숫자가 아닙니다. ");
    }
  }, 1000);
});

// then 메서드
// 성공했을 경우 결과값 반환
// promise2.then((value) => {
//   console.log(value);
// });

// error 메서드
// 실패했을 경우 결과값 반환
// promise2.catch((error) => {
//   console.timeLog(error);
// });

// promise chaining
promise2
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.timeLog(error);
  });

function add10(num) {
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num 이 숫자가 아닙니다. ");
      }
    }, 1000);
  });
  return promise3;
}

// const result = add10(0);
// result
//   .then((value) => {
//     console.log(value);

//     const newP = add10(value);
//     return newP;
//     // 콜백 지옥을 방지할 수 있는 promise 기능
//     // then 의 결과값으로 전달하여 콜백 지옥 방지 가능
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// 간결화

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
