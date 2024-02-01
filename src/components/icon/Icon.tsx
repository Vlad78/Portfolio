import React from "react";
import IconSet from "../../assets/images/icons-set.svg";

type Icon = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

const Icon: React.FC<Icon> = ({ iconId, height, width, viewBox }) => {
  return (
    <svg
      width={width || "50"}
      height={height || "50"}
      viewBox={viewBox || "0 0 50 50"}
      fill="none"
      xmlns="https://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${IconSet}#${iconId}`} />
    </svg>
  );
};

export default Icon;
