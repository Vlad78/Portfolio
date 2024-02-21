import { FC } from "react";
import { Icon } from "../../../../components/icon/Icon";
import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

export const MenuContact: FC = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <Icon iconId="email" />
          <div>email@liame.com</div>
        </li>
        <li>
          <Icon iconId="address" />
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </li>
        <li>
          <Icon iconId="phone" />
          <div> +48 303-030-111</div>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  li {
    padding: 0 7px;
    font-size: 1.2em;
    margin: 1.2em;
    display: inline-flex;
    align-items: center;
    min-width: 180px;

    *:nth-child(2) {
      margin-left: 0.7em;
    }

    @media ${theme.media.tablet} {
      margin: 0.4em;
    }
  }
  svg {
    height: 1em;
    flex-shrink: 0;
  }
`;
