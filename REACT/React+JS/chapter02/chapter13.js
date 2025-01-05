// async
// 비동기 함수로 만들어주는 키워드
// 함수가 promise 를 반환하도록 변환해주는 키워드

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "정진영",
        id: "jignonne",
      });
    });
  });
}

// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
  const data = await getData(); // getData() 가 끝날 때 까지 기다린다.
  console.log(data);
}

printData();
