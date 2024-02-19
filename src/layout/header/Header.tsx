import { Menu } from "./menu/HeaderMenu";
import LetsTalk from "../../components/Let'sTalk";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { FC } from "react";
import { S } from "./Header_Styles";

export const Header: FC = () => {
  const navigationTitles = ["Home", "Skills", "Projects"];

  return (
    <S.Header>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <S.LogoName>Vlad Razvenkov</S.LogoName>
          <Menu items={navigationTitles} />
          {/* <LetsTalk /> */}
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
