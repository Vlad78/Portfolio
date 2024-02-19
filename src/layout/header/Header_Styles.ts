import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Header = styled.header`
  position: fixed;
  color: ${theme.colors.font};
  background-color: ${theme.colors.primaryBgOp};
  backdrop-filter: blur(10px);
  z-index: 10;
  inset: 0 0 auto 0;
  display: flex;
  min-height: 60px;
  white-space: nowrap;
`;

const LogoName = styled.div`
  font-size: 1.5em;
  font-weight: 900;
  letter-spacing: -0.5px;
  margin-right: auto;
  text-align: center;
`;

export const S = {
  Header,
  LogoName,
};
