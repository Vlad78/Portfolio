import { Menu } from "./menu/HeaderMenu";
import LetsTalk from "../../components/Let'sTalk";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { FC } from "react";
import { S } from "./Header_Styles";
import styled from "styled-components";
import photo from "./../../assets/images/me2.webp";

export const Header: FC = () => {
  const navigationTitles = ["Home", "Skills", "Projects"];

  return (
    <S.Header>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Photo src={photo} alt="portfolio-photo" />
          <S.LogoName>Vlad Razvenkov</S.LogoName>
          <Menu items={navigationTitles} />
          {/* <LetsTalk /> */}
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};

const Photo = styled.img`
  height: 50px;
  margin-right: 10px;
  object-fit: cover;
`;
