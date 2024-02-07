import React, { useEffect, useState } from "react";
import IconsSet from "../../assets/images/icons-set.svg";

type Icon = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

const Icon: React.FC<Icon> = ({ iconId, height, width, viewBox }) => {
  // const [start, setStart] = useState(new Date().getTime());

  const [icon, setIcon] = useState(
    <>
      <svg width={width} height={height} viewBox={viewBox}>
        <use xlinkHref={`${IconsSet}#${iconId}`} />
      </svg>
      {/* <div style={{ position: "absolute" }}>{new Date().getTime() - start}</div> */}
    </>
  );

  useEffect(() => {
    if (iconId.includes("-gradient")) {
      (async () => {
        try {
          const { IconGradient } = await import("../../assets/images/icons-set-gradient");
          setIcon(
            <>
              <IconGradient iconId={iconId} height={height} width={width} viewBox={viewBox} />
              {/* <div style={{ position: "absolute" }}>{new Date().getTime() - start}</div> */}
            </>
          );
        } catch (e) {
          console.log("module is not found, e: ", e);
        }
      })();
    }
  }, []);

  return <>{icon}</>;
};

export default Icon;
