import React from "react";
import { IconProps } from "@common/types/IconProps";

const LinkedIn = ({
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
            stroke="#616771"
            strokeWidth="1"
            d="M0 0H18V18H0z"
            data-name="Rectangle 660"
            transform="translate(4756 6485)"
          ></path>
        </clipPath>
      </defs>
      <g
        clipPath="url(#clip-path)"
        data-name="Mask Group 13"
        transform="translate(-4756 -6485)"
      >
        <g transform="translate(4756 6485.4)">
          <path
            d="M18 17.1v6.655h-3.858v-6.209c0-1.56-.558-2.624-1.954-2.624a2.111 2.111 0 00-1.98 1.411 2.64 2.64 0 00-.128.941v6.481H6.221s.052-10.516 0-11.606h3.859v1.645l-.025.037h.025v-.037a3.832 3.832 0 013.478-1.918C16.1 11.877 18 13.536 18 17.1zM2.184 6.555a2.011 2.011 0 10-.051 4.011h.026a2.012 2.012 0 10.025-4.011zM.229 23.756h3.858V12.15H.229z"
            transform="translate(0 -6.555)"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default LinkedIn;
