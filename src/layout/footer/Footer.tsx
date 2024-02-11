import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import Icon from "../../components/icon/Icon";

const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper align="center" justify="space-evenly" direction="column">
        <Icons>
          <a href="#">
            <Icon iconId="linkedin" width="50px" height="50px" />
          </a>
          <a href="#">
            <Icon iconId="telegram" width="50px" height="50px" />
          </a>
        </Icons>
        <Creds>
          <a href="https://www.freepik.com/free-vector/landing-page-abstract-design-template-website-app-colorful-abstract-minimal-wave_23054242.htm#page=6&query=Abstract%20gradient%20landing%20page&position=24&from_view=search&track=ais&uuid=971260ec-c6c7-4dcb-8b64-de5ff6ad5e5a">
            Image by GarryKillian
          </a>{" "}
          on Freepik
          <br></br>
          ©2022 All rights reserved.
        </Creds>
      </FlexWrapper>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  margin-top: 40px;
  min-height: 20vh;
`;

const Icons = styled.div`
  display: flex;

  > :not(:last-child) {
    margin-right: 15px;
  }
`;

const Creds = styled.div`
  margin-top: 20px;
`;
