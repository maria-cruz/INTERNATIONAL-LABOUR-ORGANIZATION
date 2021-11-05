import { IconProps } from "@common/types/IconProps";
import React from "react";

const Bullet = ({
  width = "20",
  height = "20",
  fill = "#000000",
  className,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      className={className}
      viewBox="0 0 5.133 5.133"
    >
      <path
        d="M2.566 0A2.566 2.566 0 110 2.566 2.566 2.566 0 012.566 0z"
        data-name="Path 592"
      ></path>
    </svg>
  );
};

export default React.memo(Bullet);
