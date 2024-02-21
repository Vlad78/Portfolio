import React from "react";
import { Icon } from "../../../../components/icon/Icon";
import styled from "styled-components";

type Skill = {
  iconId: string;
  height?: string;
  width?: string;
  filter?: string;
};

export const Skill: React.FC<Skill> = (props) => {
  return (
    <StyledSkill filter={props.filter}>
      <Icon iconId={props.iconId} width={props.width} height={props.height} />
    </StyledSkill>
  );
};

const StyledSkill = styled.div<Omit<Skill, "iconId">>`
  min-width: 80px;
  display: flex;
  justify-content: center;
  filter: ${(props) => props.filter || ""};
`;
