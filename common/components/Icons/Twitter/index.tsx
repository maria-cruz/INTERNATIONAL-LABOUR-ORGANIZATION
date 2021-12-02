import React from "react";
import { IconProps } from "@common/types/IconProps";

const Twitter = ({
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
            data-name="Rectangle 661"
            transform="translate(5157 6485)"
          ></path>
        </clipPath>
      </defs>
      <g
        clipPath="url(#clip-path)"
        data-name="Mask Group 14"
        transform="translate(-5157 -6485)"
      >
        <g transform="translate(5157 6486.688)">
          <g data-name="Group 7337">
            <path
              d="M18 29.388a7.694 7.694 0 01-2.126.583 3.669 3.669 0 001.623-2.04 7.375 7.375 0 01-2.34.893 3.69 3.69 0 00-6.383 2.523 3.8 3.8 0 00.086.842 10.445 10.445 0 01-7.606-3.86 3.691 3.691 0 001.134 4.932 3.644 3.644 0 01-1.668-.455v.041a3.707 3.707 0 002.956 3.626 3.683 3.683 0 01-.968.121 3.263 3.263 0 01-.7-.063 3.725 3.725 0 003.45 2.569 7.415 7.415 0 01-4.575 1.576A6.911 6.911 0 010 40.625a10.389 10.389 0 005.661 1.656 10.431 10.431 0 0010.5-10.5c0-.163-.006-.321-.013-.477A7.362 7.362 0 0018 29.388z"
              data-name="Path 663"
              transform="translate(0 -27.656)"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Twitter;
