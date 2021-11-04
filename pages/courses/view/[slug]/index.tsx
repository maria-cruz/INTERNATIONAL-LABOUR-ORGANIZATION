import CourseView from "@modules/CourseView";
import axios from "axios";
import getJWT from "@common/methods/getJWT";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import parseMediaEmbed from "@common/methods/parseMediaEmbed";

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
    // unit: courseData?.unit ?? 0,
    // title: courseData?.title,
    // slug: courseData?.slug,
    // description: courseData?.description,
    // thumbnail: getStrapiFileUrl(courseData?.thumbnail),
    // topicsCount: topicsCount,
    // percentage: percentage,
    // objectives: courseData?.learning_objectives,
  };

  return {
    props: { courseViewData },
  };
};

const CourseViewPage = ({
  courseViewData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <CourseView data={courseViewData} />;
};

export default CourseViewPage;
