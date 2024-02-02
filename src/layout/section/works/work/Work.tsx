import React from "react";
import styled from "styled-components";
import Button from "../../../../components/button/Button";

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
      <Image src={img} />
      <Title>{title}</Title>
      {deployUrl && <Button text="Project" url={deployUrl} />}
      {gitHubUrl && <Button text="Code" url={gitHubUrl} />}
    </StyledWork>
  );
};

export default Work;

const StyledWork = styled.div`
  max-width: 460px;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

const Title = styled.h3``;
