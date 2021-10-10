import React from "react";
import { IconProps } from "@common/types/IconProps";

const Icon = ({ width = "20", height = "20" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <defs>
        <clipPath id="clip-path">
          <path fill="none" d="M0 0H14V14H0z"></path>
        </clipPath>
      </defs>
      <g data-name="Group 6647" transform="translate(-80 -884)">
        <circle
          cx="12"
          cy="12"
          r="12"
          fill="#007a50"
          data-name="Ellipse 6"
          transform="translate(80 884)"
        ></circle>
        <g clipPath="url(#clip-path)" transform="translate(85 890)">
          <path fill="none" d="M0 0H14V14H0z" data-name="Rectangle 460"></path>
          <path
            fill="#fff"
            d="M5.195 9.034L0 3.84l1.054-1.054 4.141 4.065L12.046 0 13.1 1.054z"
            transform="translate(0 2)"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default React.memo(Icon);
