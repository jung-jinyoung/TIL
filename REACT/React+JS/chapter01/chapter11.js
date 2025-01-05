// 함수

// 매개 변수에 인수를 전달하여 순서대로 각각 실행됨
function getArea(width, height) {
  // 함수 안에 함수 실행 가능

  function another() {
    console.log("another!");

    //   let width = 10;
    //   let height = 20;
    let area = width * height;

    //   console.log(area);
    return area; // return 문 -> 반환가능
  }
}

// getArea();
let result = getArea(5, 20);
console.log(result);

// 선언하기 전에 호출 해도 가능하다.
// 호이스팅 : 선언하기 전에 실행된다면 해당 함수를 끌어 올려서 실행한다.
let area3 = getAdd(10, 20);

function getAdd(a, b) {
  return a + b;
}
