import { IconProps } from "@common/types/IconProps";
import React from "react";

const EmailUnfill = ({
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
      viewBox="0 0 132.855 105.71"
    >
      <path
        d="M134.855 17.214A13.289 13.289 0 00121.569 4H15.285A13.289 13.289 0 002 17.214V96.5a13.289 13.289 0 0013.285 13.21h106.284a13.289 13.289 0 0013.286-13.21zm-13.285 0L68.427 50.182 15.285 17.214zm0 79.282H15.285V30.427l53.142 33.035 53.142-33.034z"
        data-name="Path 662"
        transform="translate(-2 -4)"
      ></path>
    </svg>
  );
};

export default EmailUnfill;
