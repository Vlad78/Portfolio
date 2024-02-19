import { FC } from "react";
import { S } from "./HeaderMenu_Styles";

type Menu = {
  items: string[];
};

export const Menu: FC<Menu> = ({ items }) => {
  return (
    <>
      <S.Nav isOpen={false}>
        <ul>
          {items.map((e, i) => {
            return (
              <li key={e + i}>
                <a href={`/#${e}`}>{e}</a>
              </li>
            );
          })}
        </ul>
      </S.Nav>
      <S.Burger isOpen={false}>
        <span></span>
      </S.Burger>
    </>
  );
};
