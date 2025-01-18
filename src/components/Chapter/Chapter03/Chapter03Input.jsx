import { useState } from "react";

const Chapter03Input = () => {
  const [test, setText] = useState("");
  const [message, setMessage] = useState("");

  const inputHandler = (e) => {
    //console.log(e.target.value); // input 입력값
    setText(e.target.value);
    if (e.target.value.length > 10) {
      setMessage("너무 많은 글자를 입력했다");
    } else {
      setMessage("");
    }
  };

  return (
    <>
      <h1>이거 재밌음</h1>
      <input type="text" onChange={inputHandler} />
      <br />
      <span>{message}</span>
      <br />
      <span>{test}</span>
    </>
  );
};
export default Chapter03Input;
