import { FC, useState } from "react";
import { S } from "./HeaderMenu_Styles";

type Menu = {
  items: string[];
};

export const Menu: FC<Menu> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <S.Nav isOpen={isOpen} onClick={(e) => setIsOpen(false)}>
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
      <S.Burger isOpen={isOpen} onClick={(e) => setIsOpen((p) => !p)}>
        <span></span>
      </S.Burger>
    </>
  );
};
