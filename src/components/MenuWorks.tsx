import React, { SyntheticEvent } from "react";
import styled from "styled-components";
import { theme } from "../styles/Theme";

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
              <a onClick={clickHandler} className={e === "E-commerce" ? "isActive" : ""}>
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
  margin: 45px 15px 30px;
  font-weight: 900;

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
    padding: 5px 9px;
    color: ${theme.colors.font};
    background-color: ${theme.colors.primaryBg};
    border: 1px solid ${theme.colors.font};
    border-radius: 6px;

    &.isActive {
      color: ${theme.colors.primaryBg};
      background-color: ${theme.colors.font};
      border-radius: 8px;
    }

    &:hover {
      text-decoration: none;
    }
  }
`;
