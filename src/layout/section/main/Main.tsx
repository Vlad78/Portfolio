import React from "react";
import photo from "./../../../assets/images/me.webp";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import LetsTalk from "../../../components/Let'sTalk";

const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align="center" justify="space-around">
        <div>
          <span>Hello,</span>
          <span>Vlad Razenkov</span>
          <h1>a Web Developer</h1>
          <LetsTalk />
        </div>
        <Photo src={photo} alt="portfolio-photo" />
      </FlexWrapper>
    </StyledMain>
  );
};

export default Main;

const StyledMain = styled.div`
  min-height: 100vh;
`;

const Photo = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
`;
