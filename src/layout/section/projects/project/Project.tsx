import { FC } from "react";
import { Button } from "../../../../components/button/Button";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { ProjectType } from "./Project_Types";
import { S } from "./Project_Styles";

export const Project: FC<ProjectType> = ({ img, title, deployUrl, gitHubUrl }) => {
  return (
    <S.Work>
      <S.ImageWrapper deployUrl={deployUrl} gitHubUrl={gitHubUrl}>
        <S.Image src={img} />
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
      </S.ImageWrapper>
      {/* <Title>{title}</Title> */}
    </S.Work>
  );
};
