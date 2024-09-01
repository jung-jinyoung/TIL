function task(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 3000);
}

task(1, 3, (value) => {
  console.log(value);
}); // 비동기 함수를 함수 외부에서 실행하는 방법

// 예제1.
// 음식을 주문하는 상황

function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000);
}

function coolDownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}

// Indent 가 깊어짐 (가독성이 안좋아짐) => 콜백 지옥
orderFood((food) => {
  console.log(food);
  coolDownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);
    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});
