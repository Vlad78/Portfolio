import React from "react";
import styled from "styled-components";

type Menu = {
  items: string[];
};

const Menu: React.FC<Menu> = ({ items }) => {
  return (
    <StyledNav>
      <ul>
        {items.map((e, i) => {
          return (
            <li key={e + i}>
              <a href="">{e}</a>
            </li>
          );
        })}
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
