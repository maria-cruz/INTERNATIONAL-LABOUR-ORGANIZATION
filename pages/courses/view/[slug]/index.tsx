import CourseView from "@modules/CourseView";
import axios from "axios";
import getJWT from "@common/methods/getJWT";
import getUserId from "@common/methods/getUserId";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import parseMediaEmbed from "@common/methods/parseMediaEmbed";
import getStrapiFileUrl from "@common/utils/getStrapiFileUrl";

interface ProgressType {
  unit: number;
  completed_topics: number;
  total_topics: number;
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
  const userId = await getUserId(ctx);
  const slug = ctx?.query?.slug;

  const { data: courseData }: CourseDataProps = await axios.get(
    `${process.env.API_URL}/units/me/${slug}`,
    {
      headers: {
        Authorization: jwt,
      },
    }
  );

  const unitId = courseData?.id;

  const { data: courseComments }: any = await axios.get(
    `${process.env.API_URL}/comments/unit:${courseData?.id}`,
    {
      headers: {
        Authorization: jwt,
      },
    }
  );

  // Create a progress entry (post) if progress received from courseData is missing
  if (!courseData?.progress) {
    axios
      .post(
        `${process.env.API_URL}/progresses`,
        {
          unit: unitId,
          user: userId,
        },
        {
          headers: {
            Authorization: jwt,
          },
        }
      )
      .then(() => {
        console.log("Progress data has been created.");
      })
      .catch((err) => console.error(err));
  }

  const completedTopics = courseData?.progress?.completed_topics ?? 0;
  const totalTopics = courseData?.progress?.total_topics ?? 1;
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
    instructorName: courseData?.instructor?.name ?? null,
    topicsCount: topicsCount,
    progress: percentage,
    description: courseData?.description ?? null,
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
