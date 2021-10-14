import { IconProps } from "@common/types/IconProps";
import React from "react";

const DownArrow = ({
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
      viewBox="0 0 7.41 12"
    >
      <path
        d="M0 10.59L4.58 6 0 1.41 1.41 0l6 6-6 6z"
        data-name="Path 20"
      ></path>
    </svg>
  );
};

export default React.memo(DownArrow);
