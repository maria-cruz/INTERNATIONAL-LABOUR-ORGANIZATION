import { IconProps } from "@common/types/IconProps";
import React from "react";

const Trophy = ({
  width = "20",
  height = "20",
  fill = "#000000",
  className = "",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      className={className}
      viewBox="0 0 42 42"
    >
      <path fill="none" d="M0 0H42V42H0z" data-name="Rectangle 644"></path>
      <path
        d="M35 7h-4V3H11v4H7a4.012 4.012 0 00-4 4v2a9.983 9.983 0 008.78 9.88A10.019 10.019 0 0019 28.8V35h-8v4h20v-4h-8v-6.2a10.019 10.019 0 007.22-5.92A9.983 9.983 0 0039 13v-2a4.012 4.012 0 00-4-4zM7 13v-2h4v7.64A6.021 6.021 0 017 13zm28 0a6.021 6.021 0 01-4 5.64V11h4z"
        data-name="Path 641"
      ></path>
    </svg>
  );
};

export default Trophy;
