import { StyledContent, StyledMemo, StyledWriter } from "./Memolist.styles";
const Memolist = (props) => {
  const memos = props.memos;

  return (
    <>
      {memos ? (
        memos.map((m, i) => {
          return (
            <StyledMemo key={i}>
              <StyledContent length={m.content.length}>
                {m.content}
              </StyledContent>
              <StyledWriter>{m.writer}</StyledWriter>
            </StyledMemo>
          );
        })
      ) : (
        <h2>메모 목록이 존재하지 않습니다.</h2>
      )}
    </>
  );
};
export default Memolist;
