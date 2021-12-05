import axios from "axios";

interface ProgressData {
  id: number | string;
  topics: any;
}

const updateProgress = (
  newProgressData: any,
  currentProgressData: ProgressData,
  jwt: string,
  callback?: () => void
) => {
  if (!currentProgressData || !newProgressData) {
    console.error("Invalid props in updateProgress");
  }

  const progressId = currentProgressData?.id ?? 0;
  const currentTopics = currentProgressData?.topics ?? [];

  const targetTopic = currentTopics.find(
    (currentTopic: any) =>
      currentTopic?.topic_id === newProgressData?.topic_id?.toString?.() ?? ""
  );

  const newTopic = {
    topic_id:
      newProgressData?.topic_id?.toString?.() ??
      targetTopic?.toString?.() ??
      "",
    pre_assessment: {
      correct_answers:
        newProgressData?.pre_assessment?.correct_answers ??
        targetTopic?.pre_assessment?.correct_answers ??
        0,
      total_questions:
        newProgressData?.pre_assessment?.total_questions ??
        targetTopic?.pre_assessment?.total_questions ??
        newProgressData?.pre_assessment?.total_questions ??
        0,
      is_passed:
        newProgressData?.pre_assessment?.is_passed ??
        targetTopic?.pre_assessment?.is_passed ??
        false,
    },
    post_assessment: {
      correct_answers:
        newProgressData?.post_assessment?.correct_answers ??
        targetTopic?.post_assessment?.correct_answers ??
        0,
      total_questions:
        newProgressData?.post_assessment?.total_questions ??
        targetTopic?.post_assessment?.total_questions ??
        newProgressData?.post_assessment?.total_questions ??
        0,
      is_passed:
        newProgressData?.post_assessment?.is_passed ??
        targetTopic?.post_assessment?.is_passed ??
        false,
    },
    videos: newProgressData?.videos ?? targetTopic?.videos ?? [],
  };

  const currentTopicsWithoutNewTopic = currentTopics.filter(
    (currentTopic: any) => currentTopic?.topic_id !== newTopic?.topic_id
  );

  const sanitizedCurrentTopics = currentTopicsWithoutNewTopic.map(
    (currentTopic: any) => {
      const videos = currentTopic?.videos?.map?.((video: any) => {
        return {
          video_id: video?.video_id,
          is_seen: video?.is_seen,
        };
      });

      return {
        topic_id: currentTopic?.topic_id,
        pre_assessment: {
          correct_answers: currentTopic?.pre_assessment?.correct_answers,
          total_questions: currentTopic?.pre_assessment?.total_questions,
          is_passed: currentTopic?.pre_assessment?.is_passed,
        },
        post_assessment: {
          correct_answers: currentTopic?.post_assessment?.correct_answers,
          total_questions: currentTopic?.post_assessment?.total_questions,
          is_passed: currentTopic?.post_assessment?.is_passed,
        },
        videos: videos,
      };
    }
  );

  const updatedTopics = [...sanitizedCurrentTopics, newTopic];

  axios
    .put(
      `${process.env.API_URL}/progresses/${progressId}`,
      {
        is_unit_completed: false,
        topics: updatedTopics,
      },
      {
        headers: {
          Authorization: jwt,
        },
      }
    )
    .then(() => {
      if (callback) callback();
    })
    .catch((err) => console.error(err));
};

export default updateProgress;
