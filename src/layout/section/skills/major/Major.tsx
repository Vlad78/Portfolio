import { FC } from "react";
import { S } from "./Major_Styles";

type Major = {
  number: number;
  major: string;
  rating: number;
};

export const Major: FC<Major> = (props) => {
  return (
    <S.Major>
      <S.Number>{"0" + props.number + "."}</S.Number>
      <S.Title>{props.major}</S.Title>
      {/* <S.Rating>{props.rating}</S.Rating> */}
    </S.Major>
  );
};
