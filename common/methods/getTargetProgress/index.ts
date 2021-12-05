interface ProgressData {
  id: number | string;
  topics: any;
}

const getTargetProgress = (
  targetTopicId: number | string,
  currentProgressData: ProgressData
) => {
  if (!currentProgressData) {
    console.error("Invalid props in getTargetProgress");
  }

  const currentTopics = currentProgressData?.topics ?? [];

  const targetTopic = currentTopics.find(
    (currentTopic: any) =>
      currentTopic?.topic_id === targetTopicId?.toString?.() ?? ""
  );

  const hasPreAssessment =
    !!targetTopic?.pre_assessment &&
    (!!targetTopic?.pre_assessment?.correct_answers ||
      !!targetTopic?.pre_assessment?.total_questions);

  const hasPostAssessment =
    !!targetTopic?.post_assessment &&
    (!!targetTopic?.post_assessment?.correct_answers ||
      !!targetTopic?.post_assessment?.total_questions);

  const newTopic = {
    topic_id: targetTopicId?.toString?.() ?? "",
    pre_assessment: hasPreAssessment
      ? {
          correct_answers: targetTopic?.pre_assessment?.correct_answers ?? 0,
          total_questions: targetTopic?.pre_assessment?.total_questions ?? 0,
          is_passed: targetTopic?.pre_assessment?.is_passed ?? false,
        }
      : null,
    post_assessment: hasPostAssessment
      ? {
          correct_answers: targetTopic?.post_assessment?.correct_answers ?? 0,
          total_questions: targetTopic?.post_assessment?.total_questions ?? 0,
          is_passed: targetTopic?.post_assessment?.is_passed ?? false,
        }
      : null,
    videos: targetTopic?.videos ?? [],
  };

  return newTopic;
};

export default getTargetProgress;
