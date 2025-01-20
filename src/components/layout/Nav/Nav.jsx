import { NavStyledDiv, NavStyledLi, NavStyledLink } from "./Nav.styles";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <NavStyledDiv>
      <ul>
        <NavStyledLi>
          <NavStyledLink onClick={() => navigate("/01")} href="#">
            챕1
          </NavStyledLink>
        </NavStyledLi>
        <NavStyledLi>
          <NavStyledLink href="/02">챕2</NavStyledLink>
        </NavStyledLi>
        <NavStyledLi>
          <NavStyledLink href="/03">챕3</NavStyledLink>
        </NavStyledLi>
        <NavStyledLi>
          <NavStyledLink href="/Memo">메모</NavStyledLink>
        </NavStyledLi>
        <NavStyledLi>
          <NavStyledLink href="-1">이전</NavStyledLink>
        </NavStyledLi>
      </ul>
    </NavStyledDiv>
  );
};
export default Nav;
