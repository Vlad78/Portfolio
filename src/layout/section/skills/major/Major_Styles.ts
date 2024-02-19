import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

const Major = styled.div`
  position: relative;
  flex-basis: 30%;
  text-align: right;
`;

const Number = styled.div`
  font-size: 10em;
  letter-spacing: -17px;
  font-weight: 400;
`;

const Title = styled.h3`
  position: absolute;
  inset: 120px 60px auto auto;
  white-space: nowrap;
  background-color: ${theme.colors.primaryBg};
  border-radius: 6px;
  padding: 0 7px;
`;

const Rating = styled.div`
  /* ... */
`;

export const S = {
  Major,
  Number,
  Rating,
  Title,
};
