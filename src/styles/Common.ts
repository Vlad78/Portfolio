import { theme } from "./Theme";

type Font = {
  family?: string;
  weight?: string | number;
  color?: string;
  lineHeight?: string | number;
  size?: {
    fmin: number;
    fmax: number;
  };
};

export const font = ({ family, weight, color, lineHeight, size }: Font) => `
    font-family: ${family || "Poppins"};
    font-weight: ${weight || "400"};
    color: ${color || theme.colors.font};
    line-height: ${lineHeight || "1.2"};
    font-size: calc( (100vw - 480px)/(1210 - 480) * (${size?.fmax} - ${size?.fmin}) + ${
  size?.fmin
}px);
    `;
