import photo from "./../../../assets/images/me.webp";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import LetsTalk from "../../../components/Let'sTalk";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { BGIllustration } from "../../../components/graphics/BGIllustration";
import { font } from "../../../styles/Common";

export const Main = () => {
  console.log("main");

  return (
    <StyledMain>
      <Container>
        <BGIllustration
          iconId="type2-whiteStripes"
          inset="206px auto auto 149px"
          width="1300px"
          // stroke={theme.colors.font}
          // stroke="#1a3d8f"
          // stroke='#6d0037'
          // stroke='#a91313'
          // stroke='#896c0a'
          stroke="#316c2a"
          // stroke={`#${decimalToHex(tik.color)}`}
          strokeWidth="0.3px"
          strokeDasharray="180"
          strokeOpacity="0.4"
          transform="scale(1.5) scaleX(2.4) scaleY(1.1)"
          filter={`drop-shadow(2px 3px 8px ${theme.colors.font}) blur(0.3px)`}
          transition="1s linear"
        />
        <FlexWrapper align="center" justify="center" wrap="wrap" gap="40px">
          <StyledHero>
            <h1>
              Trusted <span>Partner</span> for Your Website <span>Development.</span>
            </h1>
            <p>I build fast, responsive, contemporary web-sites.</p>
            {/* <LetsTalk /> */}
          </StyledHero>
          <Photo src={photo} alt="portfolio-photo" />
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  margin-top: 60px;
  min-height: 70vh;
  display: flex;
`;

const StyledHero = styled.div`
  white-space: break-spaces;
  flex-basis: 40%;
  min-width: 320px;
  flex-grow: 1;

  h1 {
    margin: 10%;
    transform: scale(1.13, 1);
    ${font({
      lineHeight: 1.7,
      weight: 600,
      size: { fmax: 43.2, fmin: 28 },
    })}
  }
  span {
    color: ${theme.colors.primaryBg};
    background-color: ${theme.colors.font};
    border-radius: 6px;
    padding: 0 10px;
  }
  p {
    margin-left: 15%;
    margin-right: 10%;
    /* font-size: 1.3em; */
    ${font({
      size: { fmax: 24, fmin: 18 },
    })}
  }
`;

const Photo = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
`;
