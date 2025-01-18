import styled from "styled-components";

export const StyledMemo = styled.div`
  width: 220px;
  height: 170px;
  margin: 20px;
  padding: 7px;
  background-color: navy;
  border: 1px solid lightgray;
  box-shadow: 1px 2px 1px 1px darkgray;
  display: inline-block;
`;
export const StyledContent = styled.div`
  width: 90%;
  height: 60%;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 18px;
  color: ${(props) => (props.length > 15 ? "skyblue" : "white")};
  font-weight: bold;
`;
export const StyledWriter = styled.div`
  width: 90%;
  height: 20%;
  color: white;
  font-weight: bold;
`;
