import { useState } from "react";

const MemoForm = (props) => {
  const { memos, setMemos } = props;
  const [content, setContent] = useState("");
  const [writer, setWriter] = useState("");
  // State : 컴포넌트에서 사용할 변수를 의미
  // State값의 변동이 일어나면 컴포넌트가 리렌더링
  // [a, setA] == a 상태 변수 명 / setA 상태 변수 값을 변경할 수 있는 setter

  const InputContentHandler = (e) => {
    setContent(e.target.value);
  };
  const InputWriterHandler = (e) => {
    setWriter(e.target.value);
  };

  // 추가하기 버튼 클릭하면 memo State에 새롭게 요소로 추가할 핸들러
  const addMemo = (e) => {
    // 입력값 검증
    if (content.length === 0 || writer.length === 0) {
      alert("내용 입력하세요");
      return;
    }
    // memos에 들어갈 수 있도록 같은 모양의 객체 정의
    const memo = { writer: writer, content: content };
    // 배열의 요소로 추가
    //memos.push(memo); 당장 작동은 하지만 setter사용이 기본이다
    setMemos([...memos, memo]);

    setContent("");
    setWriter("");
  };

  return (
    <>
      <div>
        <p>내용쓰세요</p>
        <input type="text" onChange={InputContentHandler} value={content} />
        <br />
        <h4>{content}</h4>
      </div>
      <div>
        <p>작성자 쓰세요</p>
        <input type="text" onChange={InputWriterHandler} value={writer} />{" "}
        <br />
        <br />
        <h4>{writer}</h4>
        <br />
      </div>
      <button onClick={addMemo}>메모추가뻐튼</button>
    </>
  );
};
export default MemoForm;
