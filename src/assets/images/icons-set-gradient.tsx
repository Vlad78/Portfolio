import React from "react";

type Icon = {
  width?: string;
  height?: string;
  viewBox?: string;
  iconId: string;
};

export const IconGradient: React.FC<Icon> = ({ height, width, viewBox, iconId }) => {
  if (iconId === "illustrator-gradient")
    return (
      <svg
        height={height}
        width={width}
        viewBox={viewBox || "0 123.30600000000001 595.279 595.279"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <radialGradient
          id="a"
          cx="-183.69"
          cy="328.972"
          r=".76"
          gradientTransform="matrix(545.6736 0 0 528.3113 100439.305 -173525.125)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#423325" stop-opacity=".98" />
          <stop offset="1" stop-color="#1c0a00" />
        </radialGradient>
        <path d="M24.803 155.549h545.674v530.792H24.803V155.549z" fill="url(#a)" />
        <path
          d="M24.803 155.549h545.674v530.792H24.803V155.549zM0 711.145h595.28V130.746H0v580.399zm389.908-373.539c0-1.984.744-2.977 2.977-2.977h38.941c1.983 0 2.976.744 2.976 2.977v195.699c0 1.983-.496 2.976-2.976 2.976h-38.445c-2.48 0-3.225-1.24-3.225-3.224V337.606h-.248zm-2.728-56.304c0-15.874 11.161-25.299 25.3-25.299 15.13 0 25.299 10.169 25.299 25.299 0 16.37-10.665 25.299-25.795 25.299-14.387.001-24.804-8.929-24.804-25.299zM275.565 419.209c-6.944-27.532-23.314-87.556-29.516-116.576h-.496c-5.209 29.02-18.354 78.13-28.771 116.576h58.783zm-68.953 40.182l-19.595 74.41c-.496 1.983-1.24 2.479-3.72 2.479h-36.461c-2.48 0-2.977-.744-2.48-3.72l70.441-246.546c1.24-4.464 1.984-8.433 2.48-20.586 0-1.736.744-2.48 1.984-2.48h52.087c1.736 0 2.48.496 2.977 2.48l78.874 267.628c.496 1.983 0 3.224-1.984 3.224h-41.174c-1.984 0-3.225-.496-3.72-2.231l-20.339-74.658h-79.37z"
          fill="#ff7f18"
        />
      </svg>
    );

  if (iconId === "photoshop-gradient")
    return (
      <svg
        height={height}
        width={width}
        viewBox={viewBox || "0 123.30600000000001 595.279 595.279"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <radialGradient
          id="a"
          cx="-183.69"
          cy="328.972"
          r=".76"
          gradientTransform="matrix(545.6736 0 0 528.3113 100439.305 -173525.125)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#34364e" stop-opacity=".98" />
          <stop offset="1" stop-color="#0c0824" />
        </radialGradient>
        <path d="M24.803 155.549h545.674v530.792H24.803V155.549z" fill="url(#a)" />
        <path
          d="M24.803 155.549h545.674v530.792H24.803V155.549zM0 711.145h595.28V130.746H0v580.399zm401.318-342.287c-19.595 0-26.291 9.921-26.291 18.106 0 8.929 4.464 15.13 30.756 28.772 38.941 18.851 51.095 36.957 51.095 63.497 0 39.685-30.26 61.016-71.186 61.016-21.579 0-40.182-4.465-50.847-10.665-1.736-.744-1.984-1.984-1.984-3.969v-36.461c0-2.48 1.24-3.225 2.977-1.984 15.626 10.17 33.484 14.634 49.854 14.634 19.595 0 27.78-8.185 27.78-19.347 0-8.929-5.705-16.866-30.757-29.764-35.221-16.866-49.854-33.98-49.854-62.504 0-31.997 25.052-58.536 68.457-58.536 21.331 0 36.213 3.225 44.398 6.945 1.984 1.24 2.48 3.224 2.48 4.96v33.98c0 1.984-1.24 3.225-3.721 2.48-10.913-6.943-27.035-11.16-43.157-11.16zm-213.309 29.516c5.705.496 10.17.496 20.091.496 29.021 0 56.304-10.169 56.304-49.606 0-31.5-19.595-47.375-52.583-47.375-9.921 0-19.347.496-23.812.744v95.741zM143.86 266.668c0-1.736 3.473-2.977 5.456-2.977 15.875-.744 39.438-1.24 63.993-1.24 68.705 0 95.492 37.701 95.492 85.82 0 63-45.638 90.036-101.693 90.036-9.425 0-12.649-.496-19.347-.496v95.245c0 1.984-.744 2.976-2.976 2.976h-37.949c-1.984 0-2.977-.744-2.977-2.976V266.668z"
          fill="#31c5f0"
        />
      </svg>
    );

  if (iconId === "indesign-gradient")
    return (
      <svg
        height={height}
        width={width}
        viewBox={viewBox || "0 123.30600000000001 595.279 595.279"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <radialGradient
          id="a"
          cx="-183.69"
          cy="328.972"
          r=".76"
          gradientTransform="matrix(545.6736 0 0 528.3113 100439.305 -173525.125)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#4b2b36" stop-opacity=".98" />
          <stop offset="1" stop-color="#250012" />
        </radialGradient>
        <path d="M24.803 155.549h545.674v530.792H24.803V155.549z" fill="url(#a)" />
        <path
          d="M24.803 155.549h545.674v530.792H24.803V155.549zM0 711.145h595.28V130.746H0v580.399zm376.515-339.311c-3.721-1.736-8.682-2.48-14.635-2.48-31.996 0-54.319 24.556-54.319 65.481 0 46.63 22.819 65.48 51.344 65.48 6.2 0 12.649-.744 17.61-2.976V371.834zm-13.147-40.429c5.209 0 8.186 0 13.146.496v-65.977c0-1.736 1.24-2.48 2.479-2.48h40.182c1.984 0 2.48.744 2.48 1.984V497.34c0 6.944 0 15.626 1.24 25.051 0 1.736-.496 1.984-2.232 2.977-21.331 10.169-43.901 14.634-64.984 14.634-54.815 0-94.005-33.98-94.005-103.182-.247-59.281 38.942-105.415 101.694-105.415zM217.774 533.057c0 2.479-.496 3.224-3.225 3.224h-38.197c-2.48 0-3.225-1.24-3.225-3.224V266.668c0-2.48 1.24-3.225 3.225-3.225h38.445c1.984 0 2.977.744 2.977 2.977v266.637z"
          fill="#ff408c"
        />
      </svg>
    );

  return <></>;
};
