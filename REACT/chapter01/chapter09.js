// 1. if문

// let num = 10;
let num = 9;

if (num >= 10) {
  //   console.log("true");
} else if (num >= 5) {
  console.log("true");
} else {
  //   console.log("false");
}

// 2. switch 문
// if 문과 기능 동일
// 다수 조건을 처리할 때 if문 보다 더 직관적이다.
// case가 일치할 경우 case문 기준 나중에 작성된 모든 case 통과
// 종료를 원할경우 break; 필수

let animal = "cat";

switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "dog": {
    console.log("강아지");
  }
  case "bear": {
    console.log("곰");
  }
  case "snake": {
    console.log("뱀");
  }
  default: {
    console.log("조건에 없는 동물입니다. ");
  } // 기본 조건 == else 와 동일한 기능
}

// 출력
// 고양이
// 강아지
// 곰
// 뱀

// break 추가 후 출력
// 고양이
