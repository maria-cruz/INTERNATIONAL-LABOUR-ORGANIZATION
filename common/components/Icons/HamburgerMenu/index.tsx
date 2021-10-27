import { IconProps } from "@common/types/IconProps";
import React from "react";

const HamburgerMenu = ({
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
      viewBox="0 0 44.591 30.708"
    >
      <path
        d="M3 36.708h44.591V31.59H3zm0-12.8h44.591V18.8H3zM3 6v5.118h44.591V6z"
        data-name="Path 617"
        transform="translate(-3 -6)"
      ></path>
    </svg>
  );
};

export default React.memo(HamburgerMenu);
