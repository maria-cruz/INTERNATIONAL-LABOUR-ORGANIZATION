import React from "react";
import { IconProps } from "@common/types/IconProps";

const Download = ({
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
      viewBox="0 0 14 17"
    >
      <path
        d="M19 9h-4V3H9v6H5l7 7zm-8 2V5h2v6h1.17L12 13.17 9.83 11zm-6 7h14v2H5z"
        data-name="Path 615"
        transform="translate(-5 -3)"
      ></path>
    </svg>
  );
};

export default React.memo(Download);
