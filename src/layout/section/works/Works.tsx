import React from "react";
import styled from "styled-components";
import SectionTitle from "../../../components/SectionTitle";
import Menu from "../../../components/Menu";
import Work from "./work/Work";
import project1 from "./../../../assets/images/projects/Wake Up.webp";
import project2 from "./../../../assets/images/projects/b2402d9fca8f5d17933b707e646be8c8.png";
import { FlexWrapper } from "../../../components/FlexWrapper";

const Works = () => {
  const navigationTitles = ["All", "Landing Page", "E-commerce", "Other"];

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
      <SectionTitle>My Projects</SectionTitle>
      <Menu items={navigationTitles} />
      <FlexWrapper gap="30px" justify="center" wrap="wrap">
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
    </StyledWorks>
  );
};

export default Works;

const StyledWorks = styled.section`
  min-height: 100vh;
`;
