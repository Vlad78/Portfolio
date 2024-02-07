import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import Icon from "../../components/icon/Icon";

const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper align="center" justify="space-evenly">
        <div>©2022 All rights reserved.</div>
        <Icons>
          <Icon iconId="linkedin" width="50px" height="50px" />
          <Icon iconId="telegram" width="50px" height="50px" />
        </Icons>
      </FlexWrapper>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  background-color: #4a4a4a;
  color: #f8f8f8;
  min-height: 20vh;
`;

const Icons = styled.div`
  display: flex;

  > :not(:last-child) {
    margin-right: 15px;
  }
`;
