import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import SectionTitle from "../../../components/title/SectionTitle";
import { Skill } from "./skill/Skill";
import { theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";
import { SectionTitleBG } from "../../../components/title/SectionTitleBG";
import { Major } from "./major/Major";

// prettier-ignore
const skills = ['react','nextjs','nodejs',"ts","docker","figma","indesign-gradient","photoshop-gradient","illustrator-gradient"]
//
const majors = [
  { title: "Web Dev", rating: 5 },
  { title: "Illustrations", rating: 4 },
  { title: "Web Design", rating: 3 },
];

const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>SKILLS</SectionTitle>
        <SectionTitleBG>SKILLS</SectionTitleBG>
        <FlexWrapper
          gap="5%"
          justify="flex-end"
          wrap="nowrap"
          align="center"
          height="150px"
          margin="0 5% 0 0"
        >
          {majors.map((e, i) => (
            <Major major={e.title} rating={e.rating} number={i + 1} key={e.title} />
          ))}
        </FlexWrapper>
        <FlexWrapper gap="30px" justify="center" wrap="nowrap" height="100px" align="flex-end">
          {skills.map((e) => (
            // <Skill iconId={e} key={e} width="50px" height="50px" />
            <Skill iconId={e} key={e} filter="saturate(0.5)" />
          ))}
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

export default Skills;

const StyledSkills = styled.section`
  margin-top: 5vh;
  min-height: 50vh;
  background-color: ${theme.colors.primaryBg};
`;
