import React from "react";
import CheckCircleOutline from "@common/components/Icons/CheckCircleOutline";
import ParamLink from "@common/components/ParamLink";
import classNames from "classnames";
import { useRouter } from "next/router";

interface TopicProps {
  id: number;
  title: string;
  isCompleted?: boolean;
}

const Topic = ({ title, id, isCompleted = false }: TopicProps) => {
  const router = useRouter();
  const currentTopicId = router?.query?.topic;
  const currentTabType = router?.query?.tab;
  const isActive = currentTopicId === `${id}` && currentTabType === "topic";

  return (
    <ParamLink query={{ topic: `${id}`, tab: "topic" }} shallow>
      <div
        className={classNames(
          "session-panel-item",
          { active: isActive },
          { completed: isCompleted }
        )}
      >
        <div className="icon">
          <CheckCircleOutline />
        </div>
        <div className="text">{`${title}`}</div>
      </div>
    </ParamLink>
  );
};

export default Topic;
