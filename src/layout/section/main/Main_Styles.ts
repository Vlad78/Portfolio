import styled from "styled-components";
import { font } from "../../../styles/Common";
import { theme } from "../../../styles/Theme";

const Main = styled.main`
  margin-top: 60px;
  min-height: 70vh;
  display: flex;
`;

const Hero = styled.div`
  white-space: break-spaces;
  flex-basis: 40%;
  min-width: 320px;
  flex-grow: 1;

  h1 {
    margin: 10%;
    transform: scale(1.13, 1);
    ${font({
      lineHeight: 1.7,
      weight: 600,
      size: { fmax: 43.2, fmin: 28 },
    })}
  }
  span {
    color: ${theme.colors.primaryBg};
    background-color: ${theme.colors.font};
    border-radius: 6px;
    padding: 0 10px;
  }
  p {
    margin-left: 15%;
    margin-right: 10%;
    ${font({
      size: { fmax: 24, fmin: 18 },
    })}
  }
`;

const Photo = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
`;

export const S = {
  Photo,
  Hero,
  Main,
};
