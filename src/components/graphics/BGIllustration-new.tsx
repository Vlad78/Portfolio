import { FC, useEffect, useRef, useState } from "react";
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

export const BGIllustration: FC<BGIllustration> = (props) => {
  const [tick, setTick] = useState({
    color1: 89,
    color2: 161,
    color3: 77,
  });

  const requestId = useRef<number>(0);
  const start = useRef(Date.now());

  const generateFrame = () => {
    const currentTime = Date.now();
    const elapsedTime = currentTime - start.current;

    if (elapsedTime < 100) {
      setTimeout(generateFrame, 100 - elapsedTime);
      return;
    }

    setTick((p) => ({ color1: p.color1 + 0.6, color2: p.color2 + 1, color3: p.color3 + 0.6 }));

    start.current = Date.now();
    requestId.current = requestAnimationFrame(generateFrame);
  };

  useEffect(() => {
    requestId.current = requestAnimationFrame(generateFrame);
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
        fill1={`hwb(${tick.color1} 47% 0% / 1)`}
        fill2={`hwb(${tick.color2} 77% 0% / 1)`}
        fill3={`hwb(${tick.color3} 23% 0% / 0.8)`}
        filter={props.filter}
      />
    </StyledBGIllustration>
  );
};

const StyledBGIllustration = styled.div<Omit<BGIllustration, "iconId">>`
  position: absolute;
  inset: ${(props) => props.inset || "0 0 0 0"};
  transform: ${(props) => props.transform || ""};
  z-index: -1;
`;
