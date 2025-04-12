// 콜백함수
function fetchData(callback) {
  setTimeout(() => {
    console.log("1초 후 데이터 도착!");
    callback(data);
  }, 1000);
}

fetchData((data) => {
  console.log(data, " is here!");
});

// 콜백 지옥 예시
function step(data, callback) {
  setTimeout(() => {
    console.log("step", data);
    callback(data + 1);
  });
}

step(1, (res1) => {
  step(res1, (res2) => {
    step(res2, (res3) => {
      console.log(res3);
    });
  });
});

// Promise 체이닝
function step2(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data + 1);
    });
  });
}

step2(1)
  .then((res1) => step2(res1))
  .then((res2) => step2(res2))
  .then((res3) => {
    console.log("final step:", res3);
  })
  .catch((error) => {
    console.log("에러:", error);
  });

// async/await

async function runSteps() {
  try {
    const res1 = await step(1);
    const res2 = await step(res1);
    const res3 = await step(res2);

    console.log("async/await result", re3);
  } catch (err) {
    console.log("에러:", err);
  }
}
