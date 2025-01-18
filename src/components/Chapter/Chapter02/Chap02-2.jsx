const ChildComponent = (props) => {
  console.log("나야 자식 :", props);
  return (
    <>
      <div>나야 차일드..</div>
    </>
  );
};

const Chap022 = (props) => {
  console.log(props);
  return (
    <>
      <div>주의점</div>
      <p>
        <strong>
          *** React의 컴포넌트는 Pure해야 하기 때문에 절대로 props을 변경해선
          안됨!!
        </strong>
        <br />
        어제부터 오늘까지의 정리 : <br />
        <br />
        - React는 Component라는 개념을 이용해서 재사용이 가능한 조각들을
        만들어냄
        <br />
        - Component를 정의하는 방법은 클래스/ 함수 있음(클래스는 비권장 방법임,
        사용X)
        <br />
        - Component들을 조합해서 View를 재구성하여 사용할 수 있음
        <br />
        ** 컴포넌트를 정의할 때는 반드시 대문자로 시작해야함! React는 소문자로
        시작하는 컴포넌트는 컴포넌트가 아닌 DOM요소로 인식함!!
      </p>
      <ChildComponent name={props.name} />
    </>
  );
};

export default Chap022;
