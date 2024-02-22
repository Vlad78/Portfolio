import { FC, useState } from "react";
import styled from "styled-components";
import { StyledSectionTitle } from "../../../components/title/SectionTitle";
import { Project } from "./project/Project";
import project1 from "./../../../assets/images/projects/Wake Up.webp";
import project2 from "./../../../assets/images/projects/b2402d9fca8f5d17933b707e646be8c8.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { MenuProjects } from "./menu/MenuProjects";
import { BGIllustration } from "../../../components/graphics/BGIllustration-new";

const projects = [
  {
    img: project1,
    title: "Доставка тортов",
    url: "https://wake-up.by",
    gitHubUrl: "#",
    type: "E-commerce",
  },
  {
    img: project2,
    title: "Эргономичные стулья",
    type: "E-commerce",
  },
  {
    img: "project3",
    title: "Юридическая компания",
    url: "-",
    gitHubUrl: "#",
    type: "Landing Page",
  },
];

const navigationTitles = ["Landing Page", "E-commerce", "Other"];

export const Works: FC = () => {
  const [activeProjects, setActiveProjects] = useState(["E-commerce"]);

  const handleOptionsToggle = (e: EventTarget & Element) => {
    setActiveProjects((p) => {
      if (e.classList.value === "isActive") {
        if (!p.includes(e.textContent || "")) return [...p, e.textContent || ""];
      } else {
        if (p.includes(e.textContent || "")) return [...p.filter((val) => val !== e.textContent)];
      }
      return p;
    });
  };

  return (
    <StyledWorks id="Projects">
      <Container>
        <StyledSectionTitle>My Projects</StyledSectionTitle>
        {/* <BGIllustration
          iconId="type2-turquoiseStripes-trimmed"
          inset="91px auto auto 1px"
          width="777px"
          transform="scale(1.5) scaleX(1.4) scaleY(1.8)"
          stroke="#896c0a"
        /> */}
        <BGIllustration iconId="type3-projects" inset="-100px 0 0 -150px" />
        <MenuProjects items={navigationTitles} handleOptionsToggle={handleOptionsToggle} />
        <FlexWrapper gap="5%" justify="space-around" wrap="wrap" margin="0 0 5vh 0">
          {projects
            .filter((e) => activeProjects.includes(e.type))
            .map((e) => (
              <Project
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

const StyledWorks = styled.section`
  min-height: 80vh;
  position: relative;
`;
