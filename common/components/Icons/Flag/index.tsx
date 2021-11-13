import React from "react";
import { IconProps } from "@common/types/IconProps";

const Flag = ({
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
      <path fill="none" d="M0 0h42v42H0z" data-name="Path 637"></path>
      <path
        d="M25.68 8.118L24.8 4H5v35h4.4V24.588h12.32l.88 4.118H38V8.118z"
        data-name="Path 638"
      ></path>
    </svg>
  );
};

export default Flag;
