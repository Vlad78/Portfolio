import React from "react";
import IconsSet from "../../assets/images/icons-set.svg";

type Icon = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

const Icon: React.FC<Icon> = ({ iconId, height, width, viewBox }) => {
  return (
    <svg
      width={width || "100"}
      height={height || "100"}
      viewBox={viewBox || "0 0 100 100"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${IconsSet}#${iconId}`} />
    </svg>
  );
};

export default Icon;
