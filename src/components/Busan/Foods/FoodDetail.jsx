import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CommentList from "../Comments/CommentsList";

const FoodDetail = () => {
  // App.js에서 : 뒤에 붙어 오는 값들을 여기서도 사용할 수 있음
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [writer, setWriter] = useState("");
  const [submitting, setSubmitting] = useState(false);
  // alert(id); 잘 됨

  /*
    * 공공데이터 활용 평가 예상
    ajax요청을 통해 공공데이터 API 응답받기
    $.ajax({}), fetch(), axios() <- 뭐가 나올지 모름
    요청을 백엔드 뒷단에서? or 앞단에서 보낼수도 있음 <- 어디서 보낼지 모름

    +
    Dbeaver
    postman
  */

  useEffect(() => {
    //console.log("요청간다~");
    axios.get(`http://localhost/hyper/busan/${id}`).then((result) => {
      const data = result.data.getFoodKr.item[0];
      if (data) {
        setFood(data);
      }
    });
  }, [id]);

  const writerHandler = (e) => {
    setWriter(e.target.value);
  };
  const contentHandler = (e) => {
    setContent(e.target.value);
  };

  const handlerSubmit = () => {
    if (content.trim() === "" || writer.trim() === "") {
      alert("작성자 또는 내용을 작성하세요");
      return;
    }

    setSubmitting(true);

    axios
      .post(`http://localhost/hyper/comments`, {
        foodNo: id,
        content: content,
        writer: writer,
      })
      .then((result) => console.log(result));
  };

  return (
    <>
      {food ? (
        <div>
          <h3>{food.MAIN_TITLE}</h3>
          <p>{food.ITEMCNTNTS}</p>
          <p>{food.ADDR1}</p>
          <img src={food.MAIN_IMG_NORMAL} />
        </div>
      ) : (
        <h1>존재하지 않는 식당</h1>
      )}
      <button onClick={() => navigate(-1)}>뒤로 가기</button>

      <hr />
      <form onSubmit={handlerSubmit}>
        작성자 : <input type="text" value={writer} onChange={writerHandler} />
        <br />
        내용 : <textarea value={content} onChange={contentHandler}></textarea>
        <br />
        <button type="submit" disabled={submitting}>
          {submitting ? "작성중...." : "댓글 등록"}
        </button>
      </form>
      <CommentList foodNo={id} />
    </>
  );
};
export default FoodDetail;
