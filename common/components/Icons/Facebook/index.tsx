import React from "react";
import { IconProps } from "@common/types/IconProps";

const Facebook = ({
  width = "24",
  height = "24",
  fill = "#000000",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 18 18"
    >
      <defs>
        <clipPath id="clip-path">
          <path
            d="M0 0H18V18H0z"
            data-name="Rectangle 659"
            transform="translate(4286 6485)"
          ></path>
        </clipPath>
      </defs>
      <g
        clipPath="url(#clip-path)"
        data-name="Mask Group 12"
        transform="translate(-4286 -6485)"
      >
        <g transform="translate(4290.8 6485)">
          <path
            d="M80.482 3.487v2.478h-1.816V9h1.816v9h3.73V9h2.5s.234-1.453.348-3.042h-2.834V3.882a.88.88 0 01.809-.726h2.032V0H84.3c-3.91 0-3.818 3.034-3.818 3.487z"
            transform="translate(-78.666 -.001)"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default Facebook;
