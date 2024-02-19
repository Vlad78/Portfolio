import { FC, SyntheticEvent } from "react";
import { S } from "./MenuProjects_Styles";

type MenuProjects = {
  items: string[];
};

export const MenuProjects: FC<MenuProjects> = ({ items }) => {
  const clickHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    e.currentTarget.classList.toggle("isActive");
  };

  return (
    <S.MenuProjects>
      <ul>
        {items.map((e, i) => {
          return (
            <li key={e + i}>
              <a onClick={clickHandler} className={e === "E-commerce" ? "isActive" : ""}>
                {e}
              </a>
            </li>
          );
        })}
      </ul>
    </S.MenuProjects>
  );
};
