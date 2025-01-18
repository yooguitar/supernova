import styled from "styled-components";

const StyledDiv = styled.div`
  width: 400px;
  height: 140px;
  border: 3px solid skyblue;
  display: inline-block;
  margin: 20px;
  background-color: ${(props) => (props.color ? props.color : "white")};
`;
const Info = (props) => {
  const { title, tel, time } = props.hospital;

  //배열을 구조분해 하여 변수로 받는 방법
  //=> const [el1, el2, el3] = props.arr;

  return (
    <>
      <StyledDiv color={props.color}>
        <h3>{title}</h3>
        <p>{tel}</p>
        <strong>{time}</strong>
      </StyledDiv>
    </>
  );
};

const Chap02 = (props) => {
  // AJAX요청에 대한 응답이 이렇게 돌아왔다 가정
  const response = {
    title: "KH치과",
    tel: "02-1111-7777",
    time: "10:00 - 15:00",
  };
  const academy = {
    title: "KH정보교육원",
    tel: "070-8888-3333",
    time: "09:00 - 18:00",
  };
  const eye = {
    title: "광교안과",
    tel: "010-0101-0202",
    time: "13:00 - 16:00",
  };
  const list = [response, academy, eye];

  return (
    <>
      <h1>{props.khKey}</h1>
      {/*
      <Info hospital={response} color={"lightgreen"} />
      <Info hospital={academy} color={"lightyellow"} />
      <Info hospital={eye} color={"lightpink"} />
      */}
      {list.map((el, i) => {
        //console.log(el);
        //console.log(i);
        return <Info hospital={el} key={i} />;
      })}
    </>
  );
};
export default Chap02;
