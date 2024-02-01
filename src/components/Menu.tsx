import React from "react";
import styled from "styled-components";

const Menu = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Skills</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Menu;

const StyledNav = styled.nav`
  ul {
    display: flex;
    gap: 80px;
  }
`;
