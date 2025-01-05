function returnFalse() {
  console.log("False 함수");
  return false;
}
function returnTrue() {
  console.log("True 함수");

  return true;
}

console.log(returnFalse() && returnTrue());
// returnFalse -> False 단락 평가 확인 -> returnTrue() 함수까지 가지 않는다.

// 단락평가 활용 사례

function printName(person) {
  // person 이 없으면 단락 평가 실행
  //   if (person && person.name) {
  //     console.log(person.name);
  //   }
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

const person = {
  name: "정진영",
};
