import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

const MenuProjects = styled.nav`
  font-weight: 900;

  ul {
    display: flex;
    justify-content: center;
    text-align: center;
    gap: 5%;
    margin: 45px 15px 30px;
    flex-wrap: wrap;

    li {
      min-width: 40px;
      white-space: nowrap;
    }
  }

  a {
    display: inline-block;
    margin: 5px 0;
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

export const S = {
  MenuProjects,
};
