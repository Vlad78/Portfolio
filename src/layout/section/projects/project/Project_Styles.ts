import styled, { css } from "styled-components";
import { ProjectType } from "./Project_Types";
import { StyledButton } from "../../../../components/button/Button";
import { theme } from "../../../../styles/Theme";
import { FlexWrapper } from "../../../../components/FlexWrapper";

const Work = styled.div`
  flex-basis: 351px;
  min-width: 300px;
  max-width: 440px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 40px;
`;

const ImageWrapper = styled.div<Omit<ProjectType, "img" | "title">>`
  display: flex;
  flex-grow: 1;
  position: relative;

  :before {
    opacity: 0;
    content: "";
    position: absolute;
    inset: 0 0 0 0;
    background-color: #ffffff6b;
    backdrop-filter: blur(3px);
  }

  ${(props) =>
    (props.gitHubUrl || props.deployUrl) &&
    css`
      &:hover {
        :before {
          opacity: 100%;
        }
        ${StyledButton} {
          opacity: 100%;
        }
      }

      @media ${theme.media.tablet} {
        ${FlexWrapper} {
          position: relative;
          transform: unset;
          min-height: unset;
          inset: unset;
          margin: 15px 0;
        }
      }
    `}

  ${StyledButton} {
    opacity: 0%;
  }

  @media ${theme.media.tablet} {
    flex-direction: column;

    ${StyledButton} {
      opacity: 100%;
    }
    :before {
      content: none;
    }
  }
`;

const Image = styled.img`
  object-fit: cover;
  border-radius: 8px;
  flex-grow: 1;
`;

const Title = styled.h3`
  text-align: center;
  margin: 15px 0 40px 0;
  font-size: 1em;
  font-weight: 900;
`;

export const S = {
  Image,
  Title,
  ImageWrapper,
  Work,
};
