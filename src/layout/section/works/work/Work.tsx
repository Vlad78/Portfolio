import React from "react";
import styled, { css } from "styled-components";
import { Button, StyledButton } from "../../../../components/button/Button";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { theme } from "../../../../styles/Theme";

type Work = {
  img: string;
  title: string;
  text?: string;
  gitHubUrl?: string;
  deployUrl?: string;
};

export const Work: React.FC<Work> = ({ img, title, deployUrl, gitHubUrl }) => {
  return (
    <StyledWork>
      <ImageWrapper deployUrl={deployUrl} gitHubUrl={gitHubUrl}>
        <Image src={img} />
        <FlexWrapper
          justify="space-evenly"
          align="center"
          position="absolute"
          inset="50% 0 auto 0"
          transform="translate(0, -50%)"
        >
          {deployUrl && <Button text="Project" url={deployUrl} />}
          {gitHubUrl && <Button text="Code" url={gitHubUrl} />}
        </FlexWrapper>
      </ImageWrapper>
      {/* <Title>{title}</Title> */}
    </StyledWork>
  );
};

const StyledWork = styled.div`
  flex-basis: 351px;
  min-width: 300px;
  max-width: 440px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 40px;
`;

const ImageWrapper = styled.div<Omit<Work, "img" | "title">>`
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
