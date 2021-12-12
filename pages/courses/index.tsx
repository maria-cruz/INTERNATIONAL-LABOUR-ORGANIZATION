import CoursesMain from "@modules/CoursesMain";
import axios from "axios";
import getJWT from "@common/methods/getJWT";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
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
    `${process.env.API_URL}/units/me?_locale=${ctx.locale}`,
    {
      headers: {
        Authorization: jwt,
      },
    }
  );

  const allCourseCardsData = allCoursesData.reduce(
    (prevCourseData: any, currentCourseData: any) => {
      const completedTopics =
        currentCourseData?.progress?.completed_topics ?? 0;
      const totalTopics = currentCourseData?.progress?.total_topics ?? 1;
      const percentage = Math.floor((completedTopics / totalTopics) * 100);

      const getProgressStatus = () => {
        if (percentage === 100) return "completed";
        if (percentage > 0) return "in-progress";
        return "";
      };

      const checkIfUnitIsLocked = () => {
        const currentUnit = Number?.(currentCourseData?.unit);
        if (currentUnit <= 1) return false;

        const isPrevCourseCompleted = prevCourseData?.status === "completed";
        if (isPrevCourseCompleted) return false;

        return true;
      };

      const courseData = {
        unit: `${currentCourseData?.unit ?? 0}`,
        title: currentCourseData?.title,
        slug: currentCourseData?.slug,
        description: currentCourseData?.description,
        thumbnail: currentCourseData?.thumbnail, // Thumbnail URL
        percentage: percentage,
        status: getProgressStatus(),
        isLocked: checkIfUnitIsLocked(),
      };

      return [...prevCourseData, courseData];
    },
    []
  );

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
