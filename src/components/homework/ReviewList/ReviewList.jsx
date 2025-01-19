import styled from "styled-components";

const StyledReview = styled.div`
  width: 95%;
  height: auto;
  border: 1px solid black;
  margin: auto;
`;
const StyledImg = styled.img`
  width: 200px;
  height: 200px;
`;

const ReviewList = (props) => {
  const reviews = props.reviews;

  return (
    <>
      {reviews ? (
        reviews.map((r, i) => {
          return (
            <StyledReview key={i}>
              <p length={r.writer.length}>작성자: {r.writer}</p>
              <p content={r.content.length}>내용: {r.content}</p>
              <p>첨부 이미지:</p>
              <StyledImg img={r.img.length} src={r.img} alt="사진" />
              <br />
              <p>
                작성일:<span>{r.enrollDate}</span>
              </p>
            </StyledReview>
          );
        })
      ) : (
        <h3>등록된 리뷰가 없어요~</h3>
      )}
    </>
  );
};
export default ReviewList;
