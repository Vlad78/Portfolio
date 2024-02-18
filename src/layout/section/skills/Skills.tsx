import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import SectionTitle from "../../../components/title/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { SectionTitleBG } from "../../../components/title/SectionTitleBG";
import { Major } from "./major/Major";
import { Majors } from "./major/Majors";

// prettier-ignore
const skills = ['react','nextjs','nodejs',"ts","docker","figma","indesign-gradient","photoshop-gradient","illustrator-gradient"]

const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>SKILLS</SectionTitle>
        <SectionTitleBG>SKILLS</SectionTitleBG>
        <Majors />
        <FlexWrapper
          gap="20px"
          justify="center"
          wrap="wrap"
          height="auto"
          margin="calc(10vw - 15px) 0 0 0"
          align="flex-end"
        >
          {skills.map((e) => {
            return <Skill iconId={e} key={e} filter="saturate(0.5)" />;
          })}
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

export default Skills;

const StyledSkills = styled.section`
  min-height: 50vh;
`;
