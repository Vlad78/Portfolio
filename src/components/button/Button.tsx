import React from "react";
import styled from "styled-components";

type Button = {
  text: string;
  url?: string;
  event?: Function;
  accent?: "important";
  disabled?: boolean;
};

const Button: React.FC<Button> = ({ text, disabled, event, url }) => {
  const eventHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (event) {
      event(e);
    } else if (url) {
      window.open(url);
    }
  };

  return (
    <StyledButton disabled={disabled || false} onClick={eventHandler}>
      {text}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button``;
