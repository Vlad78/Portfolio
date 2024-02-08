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
  margin: 0 15px;
  flex-basis: 40%;

  ul {
    display: flex;
    justify-content: end;

    li {
      flex-basis: 100px;
      min-width: 80px;
    }
  }
`;
