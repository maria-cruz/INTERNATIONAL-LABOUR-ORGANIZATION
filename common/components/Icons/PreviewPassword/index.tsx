import React from "react";
import { IconProps } from "@common/types/IconProps";

const PreviewPassword = ({
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
      viewBox="0 0 22 15"
    >
      <path
        d="M12 6a9.77 9.77 0 018.82 5.5 9.822 9.822 0 01-17.64 0A9.77 9.77 0 0112 6m0-2a11.827 11.827 0 00-11 7.5 11.817 11.817 0 0022 0A11.827 11.827 0 0012 4zm0 5a2.5 2.5 0 11-2.5 2.5A2.5 2.5 0 0112 9m0-2a4.5 4.5 0 104.5 4.5A4.507 4.507 0 0012 7z"
        data-name="Path 455"
        transform="translate(-1 -4)"
      ></path>
    </svg>
  );
};

export default React.memo(PreviewPassword);
