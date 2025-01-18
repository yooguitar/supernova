export const WhatIsReact = () => {
  return (
    <div>
      <h1 className="title">리액트란 무엇인가?</h1>

      <pre>
        U.I(User Interface)를 구현하기 위한 JavaScript Library<br></br>
        코드의 단위를 Component로 구분하며 Component를 조합하여 복잡한 U.I를
        구성할 수 있음<br></br>
        SPA(Single Page Application)를 구현하기 위한 도구로 사용된다<br></br>
        <strong>
          화면을 예쁘게 만드는것과 React는 전혀 연관이 없음(여전히 CSS가 할 일)
        </strong>
        <br></br>
        리액트를 사용하기 위해서 Node.js라는 JavaScript Runtime을 설치<br></br>
        NPM(Node Package Manager)라는 패키지 매니저 + JSX(Babel)문법을 활용할 수
        있음<br></br>
      </pre>

      <hr />
    </div>
  );
};
export const WhatIsJsx = () => {
  return (
    <div>
      <h2 className="title">JSX란 무엇인가??</h2>

      <pre>
        JSX(JavaScriptXML)는 JavaScript + XML을 사용한 자바스크립트의 확장 문법
        <br />
        리액트 문법 : React.createElement('h1', null, 'Hello, Wolrd!');
        ('태그명', '속성값', 'content');
        <br />
        JSX 문법 : &lt;h1&gt;Hello, World!&lt;/h1&gt; <br />
        <br />
        JSX문법을 사용해서 JavaScript코드 내부에 React의 "Element"를 생성할 수
        있음
        <br />
        U.I를 구현하기 위해 React와 JSX를 함께 사용하길 권장하며, JavaScript의
        모든 기능을 사용할 수 있음
        <br />
        ReactElement란??
        <br />
        Component를 구성하는 요소이다~
        <br />
        화면에 만들어내고 싶은(기술할) 요소를 작성하여 React가 브라우저 화면에
        렌더링 할 수 있게 해줌
        <br />
        특징 : 불변객체(Imutable Object)
        <br />
        <br />
        React는 index.html안에 있는 root 아이디 속성값을 가진 div요소에 포함된
        모든 요소를 관리
        <br />
        index.js에서 root.render() 호출해서 element를 전달
        <br />
        React를 이용해서 U.I를 변경하는 방법은 ReactElement를 만들고,
        root.render()의 인자로 전달하는 방법뿐!
      </pre>
      <hr />
    </div>
  );
};
