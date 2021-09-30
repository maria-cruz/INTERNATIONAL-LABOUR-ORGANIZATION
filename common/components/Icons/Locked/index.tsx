import { IconProps } from "@common/types/IconProps";
import React from "react";

const Locked = ({ width = "20", height = "20" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 27.997 36.747"
    >
      <path
        d="M28.5 13.249h-1.75v-3.5a8.749 8.749 0 10-17.5 0v3.5H7.5a3.51 3.51 0 00-3.5 3.5v17.5a3.51 3.51 0 003.5 3.5h21a3.51 3.51 0 003.5-3.5v-17.5a3.51 3.51 0 00-3.5-3.5zM18 29a3.5 3.5 0 113.5-3.5A3.51 3.51 0 0118 29zm5.424-15.749h-10.85v-3.5a5.424 5.424 0 1110.849 0z"
        data-name="Path 584"
        transform="translate(-4 -1)"
      ></path>
    </svg>
  );
};

export default React.memo(Locked);
