import React, { useState } from "react";
import IconsSet from "../../assets/images/icons-set.svg";
import { IconGradient } from "../../assets/images/icons-set-gradient";

type Icon = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

const Icon: React.FC<Icon> = ({ iconId, height, width, viewBox }) => {
  // const [start, setStart] = useState(new Date().getTime());

  if (iconId.includes("-gradient"))
    return (
      <>
        <IconGradient iconId={iconId} height={height} width={width} viewBox={viewBox} />
        {/* <div style={{ position: "absolute" }}>{new Date().getTime() - start}</div> */}
      </>
    );

  return (
    <>
      <svg width={width} height={height} viewBox={viewBox || "0 0 16 16"}>
        <use xlinkHref={`${IconsSet}#${iconId}`} />
      </svg>
      {/* <div style={{ position: "absolute" }}>{new Date().getTime() - start}</div> */}
    </>
  );
};

export default Icon;
