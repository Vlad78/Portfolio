import { FC } from "react";
import IconsSet from "../../assets/images/icons-set.svg";
import { IconGradient } from "../../assets/images/icons-set-gradient";

type Icon = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const Icon: FC<Icon> = ({ iconId, height, width, viewBox }) => {
  if (iconId.includes("-gradient"))
    return (
      <>
        <IconGradient iconId={iconId} height={height} width={width} viewBox={viewBox} />
      </>
    );

  return (
    <>
      <svg width={width} height={height} viewBox={viewBox || "0 0 16 16"}>
        <use xlinkHref={`${IconsSet}#${iconId}`} />
      </svg>
    </>
  );
};
