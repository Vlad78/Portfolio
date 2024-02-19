import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";

const Nav = styled.nav<{ isOpen: boolean }>`
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

  @media ${theme.media.tablet} {
    visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
    position: fixed;
    inset: 0 0 0 0;
    background-color: ${theme.colors.primaryBg};
    min-height: 100vh;
    margin: unset;
    z-index: 100;

    ul {
      flex-direction: column;
      gap: 30px;
      min-height: inherit;
      justify-content: center;
      align-items: center;

      li {
        text-align: center;
      }
    }
  }
`;

const Burger = styled.button<{ isOpen: boolean }>`
  visibility: hidden;
  z-index: 101;

  @media ${theme.media.tablet} {
    visibility: visible;
    position: fixed;
    width: 200px;
    height: 200px;
    top: -100px;
    right: -100px;
    background-color: transparent;

    span {
      display: block;
      width: 36px;
      height: 3px;
      background-color: ${theme.colors.font};
      background-color: ${(props) => (!props.isOpen ? theme.colors.font : "rgba(0, 0, 0, 0)")};
      position: absolute;
      inset: auto auto 70px 30px;

      ::before {
        content: "";
        display: block;
        width: 36px;
        height: 3px;
        background-color: ${theme.colors.font};
        position: absolute;
        transform: translateY(-10px);
        ${(props) =>
          props.isOpen &&
          css`
            transform: rotate(-45deg);
          `}
      }

      ::after {
        content: "";
        display: block;
        width: 24px;
        height: 3px;
        background-color: ${theme.colors.font};
        position: absolute;
        transform: translateY(10px);
        ${(props) =>
          props.isOpen &&
          css`
            transform: rotate(45deg);
            width: 36px;
          `}
      }
    }
  }
`;

export const S = {
  Nav,
  Burger,
};
