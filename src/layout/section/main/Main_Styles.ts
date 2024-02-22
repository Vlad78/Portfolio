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
  min-width: 370px;
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

const PhotoBlock = styled.div`
  display: grid;
  place-items: center;
  background-color: rgba(255, 255, 255, 0.39);
  border-radius: 8px;
  flex-basis: 34%;
  margin-right: 2%;
  min-width: 230px;
  min-height: 270px;

  @media ${theme.media.tablet} {
    display: none;
  }
`;

const Photo = styled.img`
  object-fit: cover;
  max-width: 95%;
  max-height: 80%;
  filter: contrast(1.1) saturate(0.7);
`;

export const S = {
  PhotoBlock,
  Photo,
  Hero,
  Main,
};
