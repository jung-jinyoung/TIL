// 1. Date 객체를 생성하는 방법

let date1 = new Date(); // Date 생성자
console.log(date1);

// let date2 = new Date("1995-10-12"); // "-" 일 경우 시간은 불가능
let date2 = new Date("1995/10/12/10:00:00"); // "/" 가능
let date3 = new Date(1995, 9, 12, 23, 59, 59); // "," 로도 가능
// 인덱스가 0이기 때문에 월에서는 -1 빼줘야 함
console.log(date2);
console.log(date3);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01.00시 00분 00초(UTC)" 로 부터 몇 ms 가 지났는지 의미하는 숫자값

let ts1 = date1.getTime();
console.log(ts1);

let date4 = new Date(ts1); // 타임 스탬프로 인자를 줄 경우 해당 날짜를 반환할 수 있다.
console.log(date4);

// 3. 시간 요소를 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let day = date1.getDay();

let hour = date1.getHours();
let minutes = date1.getMinutes();
let seconds = date1.getSeconds();

// 4. 시간 수정
date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(20);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

// 5. 시간을 여러 포맷으로 출력하기

// toDateString
console.log(date1.toDateString());

// toLocalString -> 현지에 맞는 시간 알려주기
console.log(date1.toLocaleString());
