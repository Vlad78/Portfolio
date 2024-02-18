import styled from "styled-components";
import { Major } from "./Major";
import { theme } from "../../../../styles/Theme";

const majors = [
  { title: "Web Dev", rating: 5 },
  { title: "Illustrations", rating: 4 },
  { title: "Web Design", rating: 3 },
];

export const Majors = () => {
  return (
    <StyledMajors>
      {majors.map((e, i) => (
        <Major major={e.title} rating={e.rating} number={i + 1} key={e.title} />
      ))}
    </StyledMajors>
  );
};

const StyledMajors = styled.div`
  display: flex;
  gap: 5%;
  justify-content: flex-end;
  flex-wrap: nowrap;
  align-items: center;
  min-height: 150px;
  margin: calc(2% + 20px) 5% 0 0;

  @media ${theme.media.tablet} {
    margin: calc(6% + 20px) 0 5% 0;
    overflow-y: auto;
    justify-content: flex-start;
    user-select: none;
  }
`;
