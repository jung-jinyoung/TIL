import "./Main.css";

// JSX 주의사항

// 1. 중괄호 내부에는 JS 표현식만 사용 가능
// 2. 객체 값 그대로 렌더링 X , 점 표기법을 사용하여 특정 값에 접근 후 렌더
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야 한다.

const Main = () => {
  const user = {
    name: "정진영",
    isLogin: true,
  };

  return (
    <>
      {user.isLogin ? (
        <div className="logout">로그아웃</div>
      ) : (
        <div>로그인</div>
      )}
    </>
  );
};
export default Main;
