import React from "react";
import Icon from "../../../../components/icon/Icon";
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
  flex-basis: 100px;
  min-width: 80px;
  display: flex;
  justify-content: center;
  filter: ${(props) => props.filter || ""};

  position: relative;
  ::after {
    content: "";
    width: 85px;
    height: 85px;
    position: absolute;
    background-color: beige;
    inset: 50% 0 0 50%;
    transform: rotate(45deg) translate(-50%, -50%);
    transform-origin: left top;
    z-index: -1;
  }
`;
