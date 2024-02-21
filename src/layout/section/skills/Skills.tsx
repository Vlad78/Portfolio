import styled from "styled-components";
import { StyledSectionTitle } from "../../../components/title/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { StyledSectionTitleBG } from "../../../components/title/SectionTitleBG";
import { Majors } from "./major/Majors";

// prettier-ignore
const skills = ['react','nextjs','nodejs',"ts","docker","figma","indesign-gradient","photoshop-gradient","illustrator-gradient"]

export const Skills = () => {
  return (
    <StyledSkills id="Skills">
      <Container>
        <StyledSectionTitle>SKILLS</StyledSectionTitle>
        <StyledSectionTitleBG>SKILLS</StyledSectionTitleBG>
        <Majors />
        <StyledGrid>
          {skills.map((e) => {
            return <Skill iconId={e} key={e} filter="saturate(0.5)" />;
          })}
        </StyledGrid>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  min-height: 50vh;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 2%;

  min-height: 100px;
  margin-top: calc(2% + 20px);

  @media screen and (min-width: 681px) and (max-width: 910px) {
    grid-template-columns: repeat(20, 1fr);
    grid-template-rows: 100px 100px;
    gap: 30px;

    div:nth-child(n) {
      grid-column: span 4;
    }
    div:nth-child(n + 6) {
      grid-column: span 5;
    }
  }

  @media screen and (max-width: 680px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 90px 90px 90px;
    gap: 4%;
  }
`;
