import React, { SyntheticEvent } from "react";
import styled from "styled-components";

type MenuWorks = {
  items: string[];
};

export const MenuWorks: React.FC<MenuWorks> = ({ items }) => {
  const clickHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    e.currentTarget.classList.toggle("isActive");
  };

  return (
    <StyledNav>
      <ul>
        {items.map((e, i) => {
          return (
            <li key={e + i}>
              <a onClick={clickHandler} className="isActive">
                {e}
              </a>
            </li>
          );
        })}
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  margin: 30px 15px 20px;

  ul {
    display: flex;
    justify-content: center;
    text-align: center;
    gap: 5%;

    li {
      min-width: 40px;
    }
  }

  a {
    &.isActive {
      color: green;
    }
  }
`;
