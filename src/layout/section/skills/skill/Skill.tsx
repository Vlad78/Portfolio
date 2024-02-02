import React from "react";
import Icon from "../../../../components/icon/Icon";
import styled from "styled-components";

type Skill = {
  iconId: string;
};

const Skill: React.FC<Skill> = ({ iconId }) => {
  return (
    <StyledSkill>
      <Icon iconId={iconId} />
    </StyledSkill>
  );
};

export default Skill;

const StyledSkill = styled.div`
  width: 20%;
  border: solid black 1px;
  display: flex;
  justify-content: center;
`;
