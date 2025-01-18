import { useState } from "react";
/*
    컴포넌트 내부에서 변경 가능한 데이터값을 관리해야 할 경우
    props는 불변객체기 때문에 바꿀 수 없음
    
    React에서는 화면에 표시하는 데이터, 변화하는 상태 등은 모두 State를 통해 관리함
    예시 ) 버튼을 클릭했는가? / 값이 null인가? / 모달창을 열었는가? / 에러가 발생했는가?
    숫자값 / 문자값 / 배열 / 객체

    함수형 컴포넌트는 state를 관리하기 위해 useState라는 Hook을 이용함
    Hook : React 16.8v부터 새롭게 추가된 기능
           React를 사용하면서 쓸 수 있는 유용한 함수들
*/
const Chapter03 = () => {
  let [num, setNum] = useState(0); // 얘가 Hook. 사용하기 위해서는 import
  // state변수를 사용한다고 생각하면 됨
  // useState()를 호출할 때 인자값을 전달 해야함 => 초기값이 된다(타입 ANY)
  // 반환값 == 초기값이 대입 되어있는 변수 / setter함수가 반환됨
  // 변경된 사항을 리액트가 알게 하려면 set하는 과정 필요함

  const onCkBtn = () => {
    console.log(num);
    //num += 1;
    setNum((num) => num + 1); // 이 둘의 차이는 재렌더링이 발생하는가 아닌가
  };
  /*
    버튼을 클릭했을 때 setter함수를 이용해 State를 변경할 시
    화면을 새로고침 하지 않아도 수치가 바뀌고 화면이 변경됨

    이유는 컴포넌트가 재 렌더링 되었기 때문에

    함수형 컴포넌트는 상태(State)가 변경될 때마다 처음부터 다시 실행되지만,
    React는 가상 DOM을 사용하여 변경된 부분만 실제 DOM에 반영함
    => 이 과정을 재 렌더링이라 표현함

    State가 변경되었다! => 함수 컴포넌트 다시 실행! => 실제 DOM과 가상 DOM비교
    => 바뀐 부분만 다시 렌더링 => State가 변경되었다! => 처음부터 반복~

    - React가 재 렌더링을 수행하는 조건??
    1. setter를 사용한 State의 변경
    2. props를 받았는데 값이 변경된 경우
    3. *재 렌더링된 컴포넌트의 모든 하위 컴포넌트(=> 자식컴포넌트는 모두 같이 렌더링된다)
    
    ※ 주의 : state는 항상 setter를 이용해서 변경해야 하며 값을 대입하려 하면 안됨. 절 대 안 됨!!!

  */
  return (
    <>
      <h1>완전 중요한 듀오</h1>
      <button onClick={onCkBtn}>누르던가</button>
      <br />
      <label>{num}</label>
    </>
  );
};
export default Chapter03;
// 리액트란 무엇인가??
