import styled from "styled-components";
import SectionTitle from "../../../components/title/SectionTitle";
import Work from "./work/Work";
import project1 from "./../../../assets/images/projects/Wake Up.webp";
import project2 from "./../../../assets/images/projects/b2402d9fca8f5d17933b707e646be8c8.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { MenuWorks } from "../../../components/MenuWorks";
import { SyntheticEvent } from "react";

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
        <MenuWorks items={navigationTitles} />
        <FlexWrapper gap="5%" justify="space-between" wrap="wrap">
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
