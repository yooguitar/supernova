const PrintDiv = (props) => {
  const { content, time } = props.arr;
  return (
    <>
      <h3>{time}</h3>
      <div>{content}</div>
    </>
  );
};

const Chap02Exam = (props) => {
  const arr = props.arr;
  return (
    <>
      {arr.map((e, i) => (
        <PrintDiv arr={e} key={i} />
      ))}
    </>
  );
};
export default Chap02Exam;
