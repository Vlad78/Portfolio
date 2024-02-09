import React from "react";
import styled from "styled-components";
import { BGGraphicsGradient } from "../../assets/images/BG-graphics/bg-graphic-set-gradient";

type BGIllustration = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
  stroke?: string;
  strokeWidth?: string;
  strokeOpacity?: string;
  strokeDasharray?: string;
  strokeDashoffset?: string;
  background?: string;
  fill?: string;
  inset?: string;
  transform?: string;
  filter?: string;
  transition?: string;
};

export const BGIllustration: React.FC<BGIllustration> = (props) => {
  return (
    <StyledBGIllustration inset={props.inset} transform={props.transform} filter={props.filter}>
      <BGGraphicsGradient
        iconId={props.iconId}
        width={props.width}
        height={props.height}
        viewBox={props.viewBox}
        fill={props.fill}
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        strokeOpacity={props.strokeOpacity}
        strokeDasharray={props.strokeDasharray}
        strokeDashoffset={props.strokeDashoffset}
        transition={props.transition}
      />
    </StyledBGIllustration>
  );
};

const StyledBGIllustration = styled.div<Omit<BGIllustration, "iconId">>`
  position: absolute;
  inset: ${(props) => props.inset || "0 0 0 0"};
  transform: ${(props) => props.transform || ""};
  filter: ${(props) => props.filter || ""};
`;
