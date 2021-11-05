import { IconProps } from "@common/types/IconProps";
import React from "react";

const Check = ({
  width = "20",
  height = "20",
  fill = "#000000",
  className,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      className={className}
      viewBox="0 0 13.59 9.41"
    >
      <path
        d="M7.729 13.014l-3.222-2.926-1.1.989L7.729 15 17 6.579l-1.089-.989z"
        data-name="Path 591"
        transform="translate(-3.41 -5.59)"
      ></path>
    </svg>
  );
};

export default React.memo(Check);
