import React from "react";
import styled, { css } from "styled-components";
import Button, { StyledButton } from "../../../../components/button/Button";
import { FlexWrapper } from "../../../../components/FlexWrapper";

type Work = {
  img: string;
  title: string;
  text?: string;
  gitHubUrl?: string;
  deployUrl?: string;
};

const Work: React.FC<Work> = ({ img, title, deployUrl, gitHubUrl }) => {
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
      <Title>{title}</Title>
    </StyledWork>
  );
};

export default Work;

const StyledWork = styled.div`
  flex-basis: 350px;
  min-width: 350px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ImageWrapper = styled.div<Omit<Work, "img" | "title">>`
  display: flex;
  flex-grow: 1;
  position: relative;

  ${(props) =>
    (props.gitHubUrl || props.deployUrl) &&
    css`
      &:hover {
        :before {
          content: "";
          position: absolute;
          inset: 0 0 0 0;
          background-color: #ffffff6b;
          backdrop-filter: blur(3px);
        }
        ${StyledButton} {
          opacity: 100%;
        }
      }
    `}

  ${StyledButton} {
    opacity: 0%;
  }
`;

const Image = styled.img`
  object-fit: cover;
  flex-grow: 1;
`;

const Title = styled.h3`
  text-align: center;
  margin: 15px 0;
  font-size: 1em;
  font-weight: 900;
`;
