import "./Chapter01.styles.css";
import { StyledDiv, StyledP } from "./Chapter01.styles";

const Chap01 = () => {
  const message = "안녕 나는 안내메시지야";
  const element = <div>나는 리액트 요소긴 한데 변수에 대입됨</div>;

  /*
    오늘의 실습 예제
    header, navbar, content, footer 컴포넌트 
  */

  // 1. 변수에 대입된 값을 React Element에 출력하고 싶다면,
  // 중괄호를 이용해서 변수 식별자를 감싸줌
  // 2. return 시 반환할 React Element가 2개 이상이라면
  // 반드시 하나의 부모요소로 감싸줘야함 (요약 : 가공해서 하나만 리턴해라)
  // 3. 감쌀 태그가 없다면 리액트에서 제공하는 Fragment를 사용하거나
  // 빈 태그 <>사용

  /*
    * React Element에 class속성과 style을 부여하는 방법
    JSX는 XML기반 기술이기 때문에 HTML에서의 class속성을 그대로 사용할 수 없음!
    className이라는 속성을 이용해서 ReactElement에 class속성을 부여해야함
    => styled component 방식을 권장(tailwind는 컴포넌트 다 만들어줌)
  */

  return (
    <>
      <h2>* 챕터1 시작</h2>
      <div>안녕 {message} 나는 Chap01이야</div>
      <div>하나 더 보낼래</div>
      {element}

      <hr />
      <div className="styled-div">여기다가 첫 번째 스타일 부여해야지~~</div>
      <div style={{ backgroundColor: "orange", fontSize: "48px" }}>
        나는 최악의 방법으로 스타일 먹여야지~~
      </div>
      <StyledDiv>
        나는 태어날 때 부터 스타일이 다 맥여져 있음 그래서 따로 줄 필요가 없음!
      </StyledDiv>
      <StyledP>나는 스타일이 들어간 P태그야</StyledP>
    </>
  );
};
export default Chap01;
