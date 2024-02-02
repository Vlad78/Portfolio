import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import SectionTitle from "../../../components/SectionTitle";
import Skill from "./skill/Skill";

const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>Skills</SectionTitle>
      <FlexWrapper gap="30px" justify="center" wrap="wrap">
        <Skill iconId="react" />
        <Skill iconId="nextjs" />
        <Skill iconId="nodejs" />
        <Skill iconId="ts" />
        <Skill iconId="figma" />
        <Skill iconId="indesign" />
        <Skill iconId="photoshop" />
        <Skill iconId="docker" />
      </FlexWrapper>
    </StyledSkills>
  );
};

export default Skills;

const StyledSkills = styled.section`
  min-height: 50vh;
  background-color: #e4e4e4;
`;
