import { IconProps } from "@common/types/IconProps";
import React from "react";

const HamburgerMenuActive = ({
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
      viewBox="0 0 45.206 29.588"
    >
      <path
        fill="#00b274"
        d="M3 35.588h32.649v-4.931H3zM3 23.26h25.114v-4.932H3zM3 6v4.931h32.649V6zm45.206 23.646l-8.991-8.852 8.991-8.852-3.541-3.476-12.557 12.328 12.557 12.328z"
        data-name="Path 620"
        transform="translate(-3 -6)"
      ></path>
    </svg>
  );
};

export default React.memo(HamburgerMenuActive);
