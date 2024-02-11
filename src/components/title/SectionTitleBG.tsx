import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const SectionTitleBG = styled.div`
  position: absolute;
  inset: -10% 0 auto 4%;
  color: ${theme.colors.fontBG};
  font-size: 26em;
  font-weight: 900;
  font-family: Roboto;
  letter-spacing: -10px;
  text-transform: uppercase;
  user-select: none;
  white-space: nowrap;
  z-index: 0;
`;
