import React from "react";
export interface TitleProps {
  title?: string;
  route?: string;
}
const Title = ({ title = "" }) => {
  return <div className="_subheading-label">{title}</div>;
};

export default Title;
