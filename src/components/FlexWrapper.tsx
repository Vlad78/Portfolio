import React from "react";
import styled from "styled-components";

type FlexWrapper = {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: "wrap" | "nowrap";
  gap?: string;
  height?: string;
  margin?: string;
  position?: "relative" | "absolute";
  inset?: string;
  transform?: string;
};

export const FlexWrapper = styled.div<FlexWrapper>`
  display: flex;
  position: relative;
  margin: ${(props) => props.margin || ""};
  min-height: ${(props) => props.height || "100%"};
  gap: ${(props) => props.gap || ""};
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  position: ${(props) => props.position};
  inset: ${(props) => props.inset || ""};
  transform: ${(props) => props.transform};
`;

export default FlexWrapper;
