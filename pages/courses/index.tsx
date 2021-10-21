import CoursesMain from "@modules/CoursesMain";
import axios from "axios";
import getJWT from "@common/methods/getJWT";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import getStrapiImageUrl from "@common/utils/getStrapiImageUrl";

interface CoursesDataType {
  unit: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: any;
  percentage: number;
  status: string;
  progress: any;
}

interface AllCoursesDataType {
  data: CoursesDataType[];
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const jwt = await getJWT(ctx, true);

  const { data: allCoursesData }: AllCoursesDataType = await axios.get(
    `${process.env.API_URL}/units/me?_locale=en`,
    {
      headers: {
        Authorization: jwt,
      },
    }
  );

  const allCourseCardsData = allCoursesData.map((courseData) => {
    const completedTopics = courseData?.progress?.completed_topics_count ?? 0;
    const totalTopics = courseData?.progress?.total_topics_count ?? 1;
    const percentage = Math.floor((completedTopics / totalTopics) * 100);

    const getProgressStatus = () => {
      if (percentage === 100) return "completed";
      if (percentage > 0) return "in-progress";
      return "";
    };

    return {
      unit: `Unit ${courseData?.unit ?? 0}`,
      title: courseData?.title,
      slug: courseData?.slug,
      description: courseData?.description,
      thumbnail: getStrapiImageUrl(courseData?.thumbnail),
      percentage: percentage,
      status: getProgressStatus(),
    };
  });

  return {
    props: { allCourseCardsData },
  };
};

const CoursesPage = ({
  allCourseCardsData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <CoursesMain allCourseCardsData={allCourseCardsData} />;
};

export default CoursesPage;
