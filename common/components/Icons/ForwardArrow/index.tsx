import React from "react";
import { IconProps } from "@common/types/IconProps";

const ForwardArrow = ({
  width = "20",
  height = "20",
  fill = "#000000",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
    >
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M6.23 20.23L8 22 18 12 8 2 6.23 3.77 14.46 12z"></path>
    </svg>
  );
};

export default ForwardArrow;
