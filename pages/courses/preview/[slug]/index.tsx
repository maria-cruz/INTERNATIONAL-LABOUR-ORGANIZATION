import CoursePreview from "@modules/CoursePreview";
import axios from "axios";
import getJWT from "@common/methods/getJWT";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import getStrapiImageUrl from "@common/utils/getStrapiImageUrl";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const jwt = await getJWT(ctx, true);
  const slug = ctx?.query?.slug;

  const { data: courseData }: any = await axios.get(
    `${process.env.API_URL}/units/me/${slug}`,
    {
      headers: {
        Authorization: jwt,
      },
    }
  );

  console.log(courseData);

  const completedTopics = courseData?.progress?.completed_topics_count ?? 0;
  const totalTopics = courseData?.progress?.total_topics_count ?? 1;
  const percentage = Math.floor((completedTopics / totalTopics) * 100);

  const topics = !!courseData?.topics ? courseData.topics : [];
  const topicsCount = topics.length;

  const coursePreviewData = {
    unit: courseData?.unit ?? 0,
    title: courseData?.title,
    slug: courseData?.slug,
    description: courseData?.description,
    thumbnail: getStrapiImageUrl(courseData?.thumbnail),
    topicsCount: topicsCount,
    percentage: percentage,
    objectives: courseData?.learning_objectives,
  };

  return {
    props: { coursePreviewData },
  };
};

const CoursePreviewPage = ({
  coursePreviewData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <CoursePreview coursePreviewData={coursePreviewData} />;
};

export default CoursePreviewPage;
