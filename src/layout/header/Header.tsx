import React from "react";
import styled from "styled-components";
import Menu from "../../components/Menu";
import LetsTalk from "../../components/Let'sTalk";

const Header = () => {
  const navigationTitles = ["Home", "Skills", "Projects"];

  return (
    <StyledHeader>
      <div>Vlad Razvenkov</div>
      <Menu items={navigationTitles} />
      <LetsTalk />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  background-color: #e7e7e7;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 60px;
`;
