import React from "react";
import { IconProps } from "@common/types/IconProps";

const Icon = ({ width = "20", height = "20", fill = "#000000" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
    >
      <path fill="none" d="M0 0h24v24H0V0z" opacity="0.87"></path>
      <path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"></path>
    </svg>
  );
};

export default React.memo(Icon);
