import styled, { css } from "styled-components";
import { StyledSectionTitle } from "../../../components/title/SectionTitle";
import { theme } from "../../../styles/Theme";

const Contact = styled.section`
  position: relative;
  min-height: 70vh;

  ${StyledSectionTitle} {
    margin-top: 0;
  }
`;

const ColumnWrapper = styled.div`
  flex-basis: 40%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
`;

const Motto = styled.p`
  text-align: center;
`;

const Form = styled.form`
  flex-basis: 40%;
  min-width: 300px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input<{ as?: string }>`
  width: 100%;
  margin-bottom: 20px;
  font-family: Manrope, sans-serif;
  color: ${theme.colors.font};

  ${(props) =>
    (props.as === "input" || props.as === "textarea") &&
    css`
      padding: 10px;
      background-color: rgba(255, 255, 255, 0.7);
      font-size: 1.3em;
      outline: solid ${theme.colors.font} 1px;
      border-radius: 3px;
      border: none;
      text-shadow: 0 0 0.8px ${theme.colors.font};

      &::placeholder {
        text-shadow: none;
        color: #c2c2c2;
      }

      &:focus-visible {
        background-color: ${theme.colors.primaryBgOp};
        box-shadow: rgba(6, 24, 44, 0.1) 0px 0px 0px 2px, rgba(6, 24, 44, 0.25) 0px 4px 6px -1px,
          rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
      }
    `}

  ${(props) =>
    props.as === "textarea" &&
    css`
      resize: none;
      height: 290px;
    `}
`;

export const S = {
  ColumnWrapper,
  Contact,
  Form,
  Input,
  Motto,
};
