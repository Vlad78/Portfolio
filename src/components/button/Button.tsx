import { FC } from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

type Button = {
  text: string;
  url?: string;
  event?: Function;
  accent?: "important";
  disabled?: boolean;
};

export const Button: FC<Button> = ({ text, disabled, event, url, ...args }) => {
  const eventHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (event) {
      event(e);
    } else if (url) {
      window.open(url);
    }
  };

  return (
    <StyledButton disabled={disabled || false} onClick={eventHandler} {...args}>
      {text}
    </StyledButton>
  );
};

export const StyledButton = styled.button<Omit<Button, "text">>`
  font-family: Manrope, sans-serif;
  padding: 10px;
  margin: 5px;
  min-width: 90px;
  max-width: fit-content;
  min-height: fit-content;
  background-color: ${theme.colors.primaryBg};
  border-radius: 20px;
  outline: solid 1px ${theme.colors.font};
`;
