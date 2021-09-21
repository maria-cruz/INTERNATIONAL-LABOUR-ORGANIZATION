import React from "react";
import { IconProps } from "@common/types/IconProps";

interface OpenBookProps {
  width?: string;
  height?: string;
  fill?: string;
}
const OpenBook = ({
  width = "20",
  height = "20",
  fill = "#oooooo",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 42 42"
    >
      <path fill="none" d="M0 0h42v42H0z" data-name="Path 639"></path>
      <path
        d="M33.727 1l-9.091 9.39v20.659l9.091-8.449zM1 10.39V37.9a.994.994 0 00.909.939c.182 0 .273-.094.455-.094A21.607 21.607 0 0111 36.683c3.545 0 7.364.751 10 2.817V10.39c-2.636-2.066-6.455-2.817-10-2.817s-7.364.751-10 2.817zm40 25.354V10.39a12.252 12.252 0 00-3.636-1.878v25.354A20.5 20.5 0 0031 32.927a21.368 21.368 0 00-10 2.817V39.5a21.368 21.368 0 0110-2.817 18.016 18.016 0 018.636 1.972.8.8 0 00.455.094.994.994 0 00.909-.939v-2.066z"
        data-name="Path 640"
      ></path>
    </svg>
  );
};

export default OpenBook;
