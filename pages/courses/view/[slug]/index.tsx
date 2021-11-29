import CourseView from "@modules/CourseView";
import axios from "axios";
import getJWT from "@common/methods/getJWT";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import parseMediaEmbed from "@common/methods/parseMediaEmbed";
import getStrapiFileUrl from "@common/utils/getStrapiFileUrl";

interface ProgressType {
  unit: number;
  completed_topics_count: number;
  total_topics_count: number;
  is_unit_completed: boolean;
}

interface TopicsType {
  id: number;
  title?: string;
  description?: string;
  media_embed?: string;
  pre_assessment: any[];
  post_assessment: any[];
}
interface CourseDataType {
  id: number;
  unit?: number;
  title?: string;
  slug?: string;
  description?: string;
  topics: TopicsType[];
  progress?: ProgressType;
  learning_objectives: any;
  self_practice: any;
  instructor: any;
}

interface CourseDataProps {
  data: CourseDataType;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const jwt = await getJWT(ctx, true);
  const slug = ctx?.query?.slug;

  const { data: courseData }: CourseDataProps = await axios.get(
    `${process.env.API_URL}/units/me/${slug}`,
    {
      headers: {
        Authorization: jwt,
      },
    }
  );

  const { data: courseComments }: any = await axios.get(
    `${process.env.API_URL}/comments/unit:${courseData?.id}`,
    {
      headers: {
        Authorization: jwt,
      },
    }
  );

  const completedTopics = courseData?.progress?.completed_topics_count ?? 0;
  const totalTopics = courseData?.progress?.total_topics_count ?? 1;
  const percentage = Math.floor((completedTopics / totalTopics) * 100);

  const topics = !!courseData?.topics ? courseData.topics : [];
  const topicsCount = topics.length;

  const modifiedTopics = topics.map((topic) => {
    const parsedMediaEmbed = parseMediaEmbed(topic.media_embed);

    return {
      ...topic,
      media_embed: parsedMediaEmbed,
    };
  });

  const courseViewData: any = {
    ...courseData,
    topics: modifiedTopics,
  };

  const unitDetailsProps = {
    instructorAvatar: getStrapiFileUrl(courseData?.instructor?.avatar?.url),
    instructorName: courseData?.instructor?.name,
    topicsCount: topicsCount,
    progress: percentage,
    description: courseData?.description,
    objectives: courseData?.learning_objectives ?? [],
  };

  const unitQandAProps = {
    courseId: courseData?.id,
    courseComments: courseComments,
  };

  const unitDownloadableFilesProps = {
    courseDownloadableFiles: courseData?.self_practice?.files ?? [],
  };

  return {
    props: {
      courseViewData,
      unitDetailsProps,
      unitQandAProps,
      unitDownloadableFilesProps,
    },
  };
};

const CourseViewPage = ({
  courseViewData,
  unitDetailsProps,
  unitQandAProps,
  unitDownloadableFilesProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <CourseView
      data={courseViewData}
      unitDetailsProps={unitDetailsProps}
      unitQandAProps={unitQandAProps}
      unitDownloadableFilesProps={unitDownloadableFilesProps}
    />
  );
};

export default CourseViewPage;
