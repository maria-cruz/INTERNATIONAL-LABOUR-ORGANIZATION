import React from "react";
import CheckCircleOutline from "@common/components/Icons/CheckCircleOutline";
import ParamLink from "@common/components/ParamLink";

interface TopicProps {
  id: number;
  title: string;
}

const Topic = ({ title, id }: TopicProps) => {
  return (
    <ParamLink query={{ topic: `${id}` }} shallow>
      <div className="session-panel-item">
        <div className="icon">
          <CheckCircleOutline />
        </div>
        <div className="text">{`${title}`}</div>
      </div>
    </ParamLink>
  );
};

export default Topic;
