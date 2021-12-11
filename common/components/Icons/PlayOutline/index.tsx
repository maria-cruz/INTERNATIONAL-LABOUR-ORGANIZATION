import React from "react";
import { IconProps } from "@common/types/IconProps";

const Icon = ({ width = "20", height = "20", fill = "#8F949D" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
    >
      <path
        strokeWidth="2.5"
        d="M1.25 2.824v15.978a1.539 1.539 0 002.375 1.3l12.554-7.989a1.543 1.543 0 000-2.606L3.625 1.529A1.539 1.539 0 001.25 2.824z"
        data-name="play_arrow_black_24dp (3)"
      ></path>
    </svg>
  );
};

export default React.memo(Icon);
