import React from "react";
import { IconProps } from "@common/types/IconProps";

const Icon = ({ width = "20", height = "20" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
    >
      <path
        d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8.011 8.011 0 01-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"
        data-name="Path 605"
        transform="translate(-2 -2)"
      ></path>
    </svg>
  );
};

export default React.memo(Icon);
