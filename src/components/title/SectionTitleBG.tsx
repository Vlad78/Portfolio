import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";

export const SectionTitleBG = styled.div`
  position: absolute;
  inset: -8% 0 auto 4%;
  ${font({
    family: "Roboto",
    weight: 900,
    color: theme.colors.fontBG,
    size: { fmax: 416, fmin: 312 },
  })}
  letter-spacing: -10px;
  text-transform: uppercase;
  user-select: none;
  white-space: nowrap;
  z-index: 0;

  @media ${theme.media.tablet} {
    margin-top: calc(4% + 20px);
  }
`;
