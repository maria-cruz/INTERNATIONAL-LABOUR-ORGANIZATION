import React, { useState } from "react";
import CheckCircleOutline from "@common/components/Icons/CheckCircleOutline";
import PlayOutline from "@common/components/Icons/PlayOutline";
import ParamLink from "@common/components/ParamLink";
import classNames from "classnames";
import { useRouter } from "next/router";

import updateProgress from "@common/methods/updateProgress";
import getJWT from "@common/methods/getJWT";

interface TopicProps {
  id: number;
  title: string;
  isCompleted?: boolean;
  currentProgressData: any;
}

const Topic = ({
  title,
  id,
  isCompleted = false,
  currentProgressData,
}: TopicProps) => {
  const jwt = getJWT(undefined, true);
  const initialViewed = isCompleted;
  const [isViewed, setIsViewed] = useState(initialViewed);

  const router = useRouter();
  const currentTopicId = router?.query?.topic;
  const currentTabType = router?.query?.tab;
  const isActive = currentTopicId === `${id}` && currentTabType === "topic";

  const handleLinkClick = () => {
    setIsViewed(true);
    const newProgressData = {
      topic_id: id,
      videos: [
        {
          video_id: "1",
          is_seen: true,
        },
      ],
    };

    updateProgress(newProgressData, currentProgressData, jwt);
  };

  return (
    <ParamLink query={{ topic: `${id}`, tab: "topic" }} shallow>
      <div
        onClick={handleLinkClick}
        className={classNames(
          "session-panel-item",
          { active: isActive },
          { completed: isViewed }
        )}
      >
        {isViewed ? (
          <div className="play-icon">
            <PlayOutline />
          </div>
        ) : (
          <div className="play-icon-unseen">
            <PlayOutline />
          </div>
        )}
        <div className="text">{`${title}`}</div>
      </div>
    </ParamLink>
  );
};

export default Topic;
