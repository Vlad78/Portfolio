import React from "react";
import styled from "styled-components";
import Menu from "../../components/Menu";
import LetsTalk from "../../components/Let'sTalk";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";

const Header = () => {
  const navigationTitles = ["Home", "Skills", "Projects"];

  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between" align="center" height="60px">
          <StyledName>Vlad Razvenkov</StyledName>
          <Menu items={navigationTitles} />
          <LetsTalk />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  position: fixed;
  color: ${theme.colors.font};
  background-color: ${theme.colors.primaryBg};
  backdrop-filter: blur(10px);
  z-index: 10;
  inset: 0 0 auto 0;
`;

const StyledName = styled.div`
  font-size: 1.5em;
  font-weight: 900;
  letter-spacing: -0.5px;
  margin-right: auto;
  text-align: center;
`;
