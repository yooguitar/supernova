import { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StyledWrap = styled.div`
  width: 1200px;
  height: auto;
  min-height: 800px;
  margin: auto;
  border: 1px solid;
`;
const StyledTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: lightgreen;
  text-align: center;
  margin: 15px 0px;
`;
const StyledInnerWrap = styled.div`
  width: 1100px;
  margin: auto;
  height: auto;
  min-height: 420px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  margin-top: 80px;
  padding: 12px;
`;
const StyledCard = styled.div`
  width: 280px;
  display: inline-block;
  box-shadow: 1px 1px 1px 1px darkgray;
  height: 220px;
  margin: 9px; 9px;
  padding: 5px;

  &:hover {
    cursor: pointer;
    box-shadow: 3px 3px 3px 3px darkgray;
  }
`;
const StyledImage = styled.img`
  width: 200px;
  height: 130px;
`;
const StyledFoodTitle = styled.h4`
  font-weight: bold;
  text-align: center;
  font-size: 17px;
  margin: 0px;
`;
const StyledMenu = styled.p`
  text-align: center;
  font-size: 15px;
  margin: 0px;
`;

const Foods = () => {
  const [foods, setFoods] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); // 더 불러올 게시글이 있는지 없는지

  const navigate = useNavigate();

  useEffect(() => {
    /*
    fetch API는 구식 브라우저에서는 돌지 않을 수 있다 => axios 라이브러리를 사용해보자
    let requestUrl = "http://localhost/hyper/busan?page=1";
    requestUrl +=
    "?serviceKey=ElI9%2FMOuIP0qtq%2FWVgG%2F8vBVcXmnts24r6z4GtxQ1lKkjgoBlf4K69EsyiQZOahN8%2FWp%2F%2BIDkzSqVJfsw%2B0D5Q%3D%3D";
    앞단에서 이렇게 쓰면 서비스키가 노출될 수 있다
    requestUrl += "&numOfRows=6";
    requestUrl += "&pageNo=" + 1;
    requestUrl += "&resultType=json";
    //then((response) => console.log(response)) 결과를 찍어볼 수 있따
    fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log("문제발생!", err))
    .finally(console.log("finally는 무조건 실행"));
    
    방법 1.
    axios({
        url: "http://localhost/hyper/busan?page=1",
        method: "get",
    }).then((result) => console.log(result));
    */

    axios.get(`http://localhost/hyper/busan?page=${page}`).then((result) => {
      console.log(result);
      const response = result.data.getFoodKr.item;
      console.log(response);
      setFoods([...foods, ...response]);
      if (response.length < 6) {
        setHasMore(false);
      }
    });
  }, [page]);

  const handleMoreBtn = () => {
    setPage((page) => page + 1);
  };

  return (
    <>
      <StyledWrap>
        <StyledTitle>제목</StyledTitle>
        <StyledInnerWrap>
          {foods.length === 0 ? (
            <h3>🥪식당 목록을 불러오는 중🍜</h3>
          ) : (
            foods.map((e, i) => {
              return (
                <StyledCard
                  key={e.UC_SEQ}
                  onClick={() => navigate(`foods/${e.UC_SEQ}`)}
                >
                  <StyledImage src={e.MAIN_IMG_THUMB}></StyledImage>
                  <hr />
                  <StyledFoodTitle>{e.MAIN_TITLE}</StyledFoodTitle>
                  <StyledMenu>{e.RPRSNTV_MENU}</StyledMenu>
                </StyledCard>
              );
            })
          )}
        </StyledInnerWrap>
        {hasMore && <button onClick={handleMoreBtn}>더보기</button>}
      </StyledWrap>
    </>
  );
};
export default Foods;
