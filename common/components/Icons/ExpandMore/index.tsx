import React from "react";
import { IconProps } from "@common/types/IconProps";

const Icon = ({
  width = "24",
  height = "24",
  fill = "#000000",
  rotate = 0,
}: IconProps) => {
  let addProps = {};
  if (!!rotate) {
    addProps = {
      style: {
        transform: `rotate(${rotate}deg)`,
      },
    };
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      {...addProps}
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
    </svg>
  );
};

export default React.memo(Icon);
