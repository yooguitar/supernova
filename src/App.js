import "./App.css";
import Chap00 from "./components/Chapter/Chapter00/Chapter00";
import Chap01 from "./components/Chapter/Chapter01/Chapter01";
import Header from "./components/layout/Header/Header";
import Nav from "./components/layout/Nav/Nav";
import Content from "./components/layout/Content/Content";
import Footer from "./components/layout/Footer/Footer";
import Chap02 from "./components/Chapter/Chapter02/Chap02";
import Chap022 from "./components/Chapter/Chapter02/Chap02-2";
import Chap02Exam from "./components/Chapter/Chapter02/Chap02Exam";
import Chapter03 from "./components/Chapter/Chapter03/Chapter03";
import Chapter032 from "./components/Chapter/Chapter03/Chapter032";
import Chapter03Input from "./components/Chapter/Chapter03/Chapter03Input";
import Memo from "./components/Chapter/Chapter03/Memo/Memo";
import { Routes, Route } from "react-router-dom";
import Homework from "./components/homework/Homework";

/*
  0117 실습 겸 숙제
  메인 컴포넌트를 하나 만들고
  자식 컴포넌트로 각각 
  리뷰 입력 모듈, 리뷰 목록 출력 모듈을 만들어서
  메인 컴포넌트의 입력 및 출력을 모두 구현하시오. 
  조건 )
  img태그를 사용하여 출력이 될 때 이미지도 함께 출력이 되도록 구현하시오.
  + 가능하다면 자바스크립트 Date를 이용하여 날짜도 함께 출력이 될 수 있도록 구현하시오.
    
  
  const arr = [
    {
      time: "1교시",
      content: "props배우기",
    },
    {
      time: "2교시",
      content: "props 또 배우기",
    },
    {
      time: "3교시",
      content: "props 실습하기",
    },
    {
      time: "4교시",
      content: "state배우기",
    },
  ];
  */
// 실습 - Chapter02 폴더 안에 Chapter02Exam 모듈을 생성하여
// App.js에 있는 arr에 있는 데이터를 가지고 화면상에 모두 출력이 될 수 있도록 구현해보시오

/*
    url을 이용해서 /page1일 경우 Chapter1 컴포넌트를 보여주고
                  /page2일 경우 Chapter2 컴포넌트를 보여주고
                  /memo일 경우 Memo 컴포넌트를 보여주고
    요청 URL에 따라서 다른 컴포넌트를 보여줄 수 있도록 라이브러리를 받아서 컴포넌트를 구분

    -ReactRouter
    터미널 : npm install react-router-dom@6

*/
/*
<Chap02 khKey={"khValue"} />
<Chap02 khKey={"khValue2"} />
<Chap022 name="홍길동" />
<Chap02Exam arr={arr} />
<Chapter03 />
<Chapter032 />
<Chapter03Input />
<Memo />

function App() {
  return (
    <div className="App">
    <Header />
    <Nav />
    <Routes>
    <Route path="/" element={<Content />} />
    <Route path="/00" element={<Chap00 />} />
    <Route path="/01" element={<Chap01 />} />
    <Route path="/02" element={<Chap02 />} />
    <Route path="/022" element={<Chap022 />} />
    <Route path="/03" element={<Chapter03 />} />
    <Route path="/032" element={<Chapter032 />} />
    <Route path="/03-input" element={<Chapter03Input />} />
    <Route path="/memo" element={<Memo />} />
    <Route path="/*" element={<h2>잘못된 페이지 요청</h2>} />
    </Routes>
    <Footer />
    </div>
  );
}
*/
function App() {
  return (
    <div className="App">
      <Homework />
    </div>
  );
}
export default App;
// 모듈에서 export 해야할 컴포넌트 or 함수가 단 하나라면 default 사용
// 컴포넌트 모듈 대문자시작, 함수모듈 소문자 시작
