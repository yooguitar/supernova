import { useState } from "react";

const ReviewForm = (props) => {
  const { reviews, setReviews } = props;
  const [writer, setWriter] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState("");
  const [enrollDate, setEnrollDate] = useState("");

  const InputWriterHandler = (e) => {
    setWriter(e.target.value);
  };
  const InputContentHandler = (e) => {
    setContent(e.target.value);
  };
  const InputImgHandler = (e) => {
    setImg(e.target.value);
  };

  const addReview = (e) => {
    if (content.length === 0 || writer.length === 0) {
      alert("내용 입력하세요");
      return;
    }

    const originDate = new Date();
    const currentDate = `${originDate.getFullYear()}년 ${
      originDate.getMonth() + 1
    }월 ${originDate.getDate()}일`;
    console.log(currentDate);

    const review = {
      writer: writer,
      content: content,
      img: img,
      enrollDate: currentDate,
    };
    setReviews([...reviews, review]);

    setContent("");
    setWriter("");
    setImg("");
    setEnrollDate(currentDate);

    console.log(review);
    // 작성일이 빈 문자열....
  };

  return (
    <>
      <h3>*리뷰 등록하기</h3>
      <p>작성자:</p>
      <input type="text" onChange={InputWriterHandler} value={writer} />
      <p>내용:</p>
      <input type="text" onChange={InputContentHandler} value={content} />
      <p>이미지 첨부(선택):</p>
      <input
        type="text"
        onChange={InputImgHandler}
        value={img}
        placeholder="소스 경로"
      />
      <br />
      <br />
      <button onClick={addReview}>리뷰 저장</button>
    </>
  );
};
export default ReviewForm;
