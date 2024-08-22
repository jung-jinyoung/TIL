// 반복문

for (let idx = 0; idx < 5; idx++) {
  //   console.log("반복!");
  console.log(idx);
}

for (let idx = 1; idx <= 10; idx++) {
  if (idx % 2 === 0) {
    continue;
  }
  console.log(idx);
  if (idx >= 5) {
    break;
  }
}
