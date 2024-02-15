import styled from "styled-components";
import SectionTitle from "../../../components/title/SectionTitle";
import Work from "./work/Work";
import project1 from "./../../../assets/images/projects/Wake Up.webp";
import project2 from "./../../../assets/images/projects/b2402d9fca8f5d17933b707e646be8c8.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { MenuWorks } from "../../../components/MenuWorks";
import { BGIllustration } from "../../../components/graphics/BGIllustration";
import { theme } from "../../../styles/Theme";

const Works = () => {
  const navigationTitles = ["Landing Page", "E-commerce", "Other"];

  const projects = [
    {
      img: project1,
      title: "Доставка тортов",
      url: "https://wake-up.by",
      gitHubUrl: "#",
    },
    {
      img: project2,
      title: "Эргономичные стулья",
    },
  ];

  return (
    <StyledWorks>
      <Container>
        <SectionTitle>My Projects</SectionTitle>
        <BGIllustration
          iconId="type2-turquoiseStripes"
          inset="85px auto auto 1px"
          width="1300px"
          // stroke={theme.colors.font}
          // stroke='#0a3d8f'
          // stroke='#6d0037'
          // stroke='#a91313'
          stroke="#896c0a"
          // stroke="#316c2a"
          strokeWidth="0.3px"
          strokeDasharray="180"
          strokeOpacity="0.4"
          transform="scale(1.5) scaleX(1.4) scaleY(1.8)"
          filter={`drop-shadow(2px 3px 8px ${theme.colors.font}) blur(0.3px)`}
          transition="1s linear"
        />
        <MenuWorks items={navigationTitles} />
        <FlexWrapper gap="5%" justify="space-around" wrap="wrap">
          {projects.map((e) => (
            <Work
              img={e.img}
              title={e.title}
              deployUrl={e?.url}
              gitHubUrl={e?.gitHubUrl}
              key={e.img}
            />
          ))}
        </FlexWrapper>
      </Container>
    </StyledWorks>
  );
};

export default Works;

const StyledWorks = styled.section`
  min-height: 80vh;
`;
