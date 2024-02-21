import photo from "./../../../assets/images/me.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import LetsTalk from "../../../components/Let'sTalk";
import { Container } from "../../../components/Container";
import { BGIllustration } from "../../../components/graphics/BGIllustration-new";
import { FC } from "react";
import { S } from "./Main_Styles";

export const Main: FC = () => {
  return (
    <S.Main id="Home">
      <Container>
        {/* <BGIllustration
          iconId="type2-whiteStripes-trimmed"
          inset="206px auto auto 345px"
          width="485px"
          transform="scale(1.5) scaleX(2.4) scaleY(1.1)"
          stroke="#316c2a"
        /> */}
        <BGIllustration iconId="type3-main" inset="0 0 0 -60px" />
        <FlexWrapper align="center" justify="center" wrap="wrap" gap="40px">
          <S.Hero>
            <h1>
              Trusted <span>Partner</span> for Your Website <span>Development.</span>
            </h1>
            <p>I build fast, responsive, contemporary web-sites.</p>
            {/* <LetsTalk /> */}
          </S.Hero>
          <S.Photo src={photo} alt="portfolio-photo" />
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
