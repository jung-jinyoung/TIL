//  게임 영역은 화면의 창에 맞게 조정
// 화면에 추가되는 구성 요소는 이높이와 너비에 맞춰짐

const gameWidth = 820.0;
const gameHeight = 1600.0;

const ballRadius = gameWidth * 0.05;
// Add this constant
const batWidth = gameWidth * 0.2;                               // Add from here...
const batHeight = ballRadius * 2;
const batStep = gameWidth ;