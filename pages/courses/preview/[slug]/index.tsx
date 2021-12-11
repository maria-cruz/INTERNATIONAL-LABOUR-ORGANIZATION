import CoursePreview from "@modules/CoursePreview";
import axios from "axios";
import getJWT from "@common/methods/getJWT";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import getStrapiFileUrl from "@common/utils/getStrapiFileUrl";

interface Files {
  url: string;
  name: string;
  size: string;
}
interface SelfPractice {
  id: number;
  files: Files;
}
interface CoursesDataType {
  id: number;
  unit: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: any;
  percentage: number;
  status: string;
  progress: any;
  topics: any;
  learning_objectives: any;
  instructor: any;
  self_practice: SelfPractice[];
}

interface AllCoursesDataType {
  data: CoursesDataType[];
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const jwt = await getJWT(ctx, true);
  const slug = ctx?.query?.slug;

  const { data: allCoursesData }: AllCoursesDataType = await axios.get(
    `${process.env.API_URL}/units/me?_locale=${ctx.locale}`,
    {
      headers: {
        Authorization: jwt,
      },
    }
  );

  const currentCourseData = allCoursesData.find((courseData) => {
    return courseData?.slug === slug;
  });

  const { data: courseComments }: any = await axios.get(
    `${process.env.API_URL}/comments/unit:${currentCourseData?.id}`,
    {
      headers: {
        Authorization: jwt,
      },
    }
  );

  const prevCourse = allCoursesData
    ?.slice?.()
    ?.reverse?.()
    ?.find?.((courseData) => {
      const currentCourseDataUnit = currentCourseData?.unit ?? 0;
      const courseDataUnit = courseData?.unit ?? 0;
      return courseDataUnit < currentCourseDataUnit;
    });

  const nextCourse = allCoursesData?.find?.((courseData) => {
    const currentCourseDataUnit = currentCourseData?.unit ?? 0;
    const courseDataUnit = courseData?.unit ?? 0;
    return courseDataUnit > currentCourseDataUnit;
  });

  const checkIfUnitIsLocked = () => {
    const currentUnit = Number?.(currentCourseData?.unit);
    if (currentUnit <= 1) return false;

    const prevCompletedTopics = prevCourse?.progress?.completed_topics ?? 0;
    const prevTotalTopics = prevCourse?.progress?.total_topics ?? 1;
    const prevPercentage = Math.floor(
      (prevCompletedTopics / prevTotalTopics) * 100
    );

    const isPrevCourseCompleted = prevPercentage === 100;
    if (isPrevCourseCompleted) return false;

    return true;
  };

  const completedTopics = currentCourseData?.progress?.completed_topics ?? 0;
  const totalTopics = currentCourseData?.progress?.total_topics ?? 1;
  const percentage = Math.floor((completedTopics / totalTopics) * 100);

  const topics = !!currentCourseData?.topics ? currentCourseData.topics : [];
  const topicsCount = topics.length;
  const courseDownloadableFiles = currentCourseData?.self_practice ?? [];

  const coursePreviewData = {
    id: currentCourseData?.id ?? 0,
    unit: currentCourseData?.unit ?? 0,
    title: currentCourseData?.title ?? "",
    slug: currentCourseData?.slug ?? "",
    description: currentCourseData?.description ?? "",
    thumbnail: getStrapiFileUrl(currentCourseData?.thumbnail),
    topicsCount: topicsCount ?? 0,
    progress: percentage ?? 0,
    objectives: currentCourseData?.learning_objectives ?? [],
    instructor: currentCourseData?.instructor ?? "",
    prevSlug: prevCourse?.slug ?? "",
    nextSlug: nextCourse?.slug ?? "",
    isLocked: checkIfUnitIsLocked(),
  };

  const filteredCourseComments = courseComments?.filter?.((comment: any) => {
    return !(comment?.blocked === true || comment?.blockedThread === true);
  });

  return {
    props: {
      coursePreviewData,
      filteredCourseComments,
      courseDownloadableFiles,
    },
  };
};

const CoursePreviewPage = ({
  coursePreviewData,
  filteredCourseComments,
  courseDownloadableFiles,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <CoursePreview
      coursePreviewData={coursePreviewData}
      courseComments={filteredCourseComments}
      courseDownloadableFiles={courseDownloadableFiles}
    />
  );
};

export default CoursePreviewPage;
