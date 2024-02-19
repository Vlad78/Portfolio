import { FC } from "react";
import { Icon } from "../../../../components/icon/Icon";

export const MenuContact: FC = () => {
  return (
    <nav>
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
    </nav>
  );
};
