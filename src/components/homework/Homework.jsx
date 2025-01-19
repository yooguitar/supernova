import styled from "styled-components";
import { useState } from "react";
import ReviewList from "./ReviewList/ReviewList";
import ReviewForm from "./ReviewForm/ReviewForm";

const StyledDiv = styled.div`
  border: 1px solid black;
  margin: 10px;
`;
const Homework = () => {
  const [reviews, setReviews] = useState([
    {
      writer: "포로리",
      content: "잘봤수다",
      img: "https://mblogthumb-phinf.pstatic.net/20140520_40/oceans76_14005552011825eNNz_JPEG/1_0.jpg?type=w420",
    },
  ]);
  return (
    <>
      <h1>*숙제 메인</h1>
      <hr />
      <ReviewForm reviews={reviews} setReviews={setReviews} />
      <hr />
      <hr />

      <ReviewList reviews={reviews} />
    </>
  );
};
export default Homework;
