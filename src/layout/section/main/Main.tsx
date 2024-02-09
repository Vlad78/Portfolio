import { useEffect, useRef, useState } from "react";
import photo from "./../../../assets/images/me.webp";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import LetsTalk from "../../../components/Let'sTalk";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { BGIllustration } from "../../../components/graphics/BGIllustration";

const Main = () => {
  const [tik, setTik] = useState({ dash: 0, color: 3238954 });
  const requestId = useRef<number>(0);

  let start = Date.now();
  const generateFunction = () => {
    let interval = Date.now() - start;
    while (interval < 90) {
      interval = Date.now() - start;
    }
    setTik((p) => ({ dash: p.dash + 1.5, color: p.color + 0.51 }));

    start = Date.now();
    requestId.current = requestAnimationFrame(generateFunction);
  };

  const decimalToHex = (decimal: number) => {
    if (decimal % 1 !== 0) {
      return decimal.toString(16).split(".")[0];
    }
    return decimal.toString(16);
  };

  useEffect(() => {
    requestId.current = requestAnimationFrame(generateFunction);
    return () => {
      cancelAnimationFrame(requestId.current);
    };
  }, []);

  return (
    <StyledMain>
      <Container>
        <BGIllustration
          iconId="type2-whiteStripes"
          inset="206px auto auto 149px"
          width="1300px"
          // stroke={theme.colors.font}
          // stroke='#0a3d8f'
          // stroke='#6d0037'
          // stroke='#a91313'
          // stroke='#896c0a'
          // stroke="#316c2a"
          stroke={`#${decimalToHex(tik.color)}`}
          strokeWidth="0.3px"
          strokeDasharray="180"
          strokeOpacity="0.4"
          strokeDashoffset={440 + tik.dash + ""}
          transform="scale(1.5) scaleX(2.4) scaleY(1.1)"
          filter={`drop-shadow(2px 3px 8px ${theme.colors.font}) blur(0.3px)`}
          transition="1s linear"
        />
        <FlexWrapper align="center" justify="space-between">
          <StyledHero>
            <h1>
              Trusted <span>Partner</span> for Your Website <span>Development.</span>
            </h1>
            <p>I build fast, responsive, contemporary web-sites.</p>
            <LetsTalk />
          </StyledHero>
          <Photo src={photo} alt="portfolio-photo" />
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

export default Main;

const StyledMain = styled.div`
  min-height: 80vh;
  display: flex;
`;

const StyledHero = styled.div`
  h1 {
    margin: 10%;
    font-size: 2.7em;
    transform: scale(1.13, 1);
    line-height: 1.7;
    font-weight: 600;
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
    font-size: 1.3em;
  }
`;

const Photo = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
`;
