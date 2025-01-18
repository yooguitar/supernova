import { useState } from "react";
import { StyledHr, StyledTitle } from "./Memo.styles";
import MemoForm from "./MemoForm";
import Memolist from "./Memolist/Memolist";

// useState 함께 사용해보기

const Memo = () => {
  const [memos, setMemos] = useState([
    {
      writer: "메모추가하세요",
      content: "네",
    },
  ]);

  return (
    <>
      <StyledTitle>메모 기록하기</StyledTitle>
      <StyledHr />
      <Memolist memos={memos} />
      <StyledHr />
      <MemoForm memos={memos} setMemos={setMemos} />
    </>
  );
};
export default Memo;
