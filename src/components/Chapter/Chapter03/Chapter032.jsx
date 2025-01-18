import { useState, useEffect } from "react";
const Chapter032 = () => {
  const [num, setNum] = useState(0);
  const onClickButton = () => {
    setNum((num) => num - 1);
  };
  useEffect(() => {
    alert(num + "번 클릭!");
  }, [num]);
  /*
    첫 렌더링(Mount)하고 재렌더링(Update) 시점에 뭔가 수행하고 싶다면 useEffect Hook사용
    []                    : 마운트 후 단 한번만 실행
    [State, State, State] : state 값에 변동이 발생 할때마다 수행

    Hook 사용 시 주의사항
    - 블럭 최상위에서만 Hook을 호출(반복문, 조건문, 함수 내부에서 호출 불가능)
    - React 함수 컴포넌트 내부에서만 사용가능(클래스 컴포넌트에서는 사용 할 수 없다)
  */
  return (
    <>
      <p>{num}</p>
      <br />
      <button onClick={onClickButton}>감소버튼</button>
    </>
  );
};
export default Chapter032;
