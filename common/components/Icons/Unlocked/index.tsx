import { IconProps } from "@common/types/IconProps";
import React from "react";

const Unlocked = ({ fill = "#000000" }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104.277 139.104">
      <path
        fill="#ccc"
        d="M56.138 106.984A13.25 13.25 0 1043.1 93.736a13.181 13.181 0 0013.038 13.248zm39.1-59.616h-6.513V34.12C88.725 15.838 74.126 1 56.138 1S23.552 15.838 23.552 34.12h12.383a20.206 20.206 0 1140.407 0v13.248H17.035A13.181 13.181 0 004 60.616v66.24A13.181 13.181 0 0017.035 140.1h78.207a13.181 13.181 0 0013.035-13.248V60.616a13.181 13.181 0 00-13.035-13.248zm0 79.488H17.035v-66.24h78.207z"
        data-name="Path 631"
        transform="translate(-4 -1)"
      ></path>
    </svg>
  );
};

export default React.memo(Unlocked);
