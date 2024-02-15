import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BGGraphicsGradient } from "../../assets/images/BG-graphics/bg-graphic-set-gradient";

type BGIllustration = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
  stroke?: string;
  strokeWidth?: string;
  strokeOpacity?: string;
  strokeDasharray?: string;
  strokeDashoffset?: string;
  background?: string;
  fill?: string;
  inset?: string;
  transform?: string;
  filter?: string;
  transition?: string;
};

export const BGIllustration: React.FC<BGIllustration> = (props) => {
  const hexToDecimal = (hex: string | undefined) => {
    hex && console.log(parseInt(hex.slice(1), 16));
    return hex ? parseInt(hex.slice(1), 16) : 3238954;
  };

  const decimalToHex = (decimal: number) => {
    if (decimal % 1 !== 0) {
      return decimal.toString(16).split(".")[0];
    }
    return decimal.toString(16);
  };

  const [tik, setTik] = useState({ dash: 0, color: hexToDecimal(props.stroke) });
  console.log("tik:", tik);
  const requestId = useRef<number>(0);
  const start = useRef(Date.now());

  const generateFunction = (time: number) => {
    let interval = Date.now() - start.current;
    while (interval < 90) {
      interval = Date.now() - start.current;
    }
    setTik((p) => ({ dash: p.dash + 1.5, color: p.color + 0.51 }));

    start.current = Date.now();
    requestId.current = requestAnimationFrame(generateFunction);
  };

  useEffect(() => {
    requestId.current = requestAnimationFrame(generateFunction);
    return () => {
      cancelAnimationFrame(requestId.current);
    };
  }, []);

  return (
    <StyledBGIllustration inset={props.inset} transform={props.transform} filter={props.filter}>
      <BGGraphicsGradient
        iconId={props.iconId}
        width={props.width}
        height={props.height}
        viewBox={props.viewBox}
        fill={props.fill}
        stroke={`#${decimalToHex(tik.color)}`}
        strokeWidth={props.strokeWidth}
        strokeOpacity={props.strokeOpacity}
        strokeDasharray={props.strokeDasharray}
        strokeDashoffset={440 + tik.dash + ""}
        transition={props.transition}
      />
    </StyledBGIllustration>
  );
};

const StyledBGIllustration = styled.div<Omit<BGIllustration, "iconId">>`
  position: absolute;
  inset: ${(props) => props.inset || "0 0 0 0"};
  transform: ${(props) => props.transform || ""};
  filter: ${(props) => props.filter || ""};
  z-index: -1;
`;
