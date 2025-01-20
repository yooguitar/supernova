import { useEffect, useState } from "react";

const CommentList = (props) => {
  console.log(props);
  const id = props.foodNo;
  const [comments, setComments] = useState([]);
  //const [flag, isFlag] = useState(true);

  useEffect(() => {
    const requestUrl = `http://localhost/hyper/comments/${id}`;

    /* 데이터가 많다면 이 방법 사용
    const params = {
      a: "a",
      b: "b",
    };
    */

    fetch(requestUrl)
      .then((result) => result.json())
      .then((data) => setComments([...comments, ...data]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {comments != [] ? (
        comments.map((e, i) => {
          return (
            <div key={i}>
              <h4>{e.writer}</h4>
              <p>{e.content}</p>
            </div>
          );
        })
      ) : (
        <h3>댓글 없어요</h3>
      )}
    </>
  );
};
export default CommentList;
