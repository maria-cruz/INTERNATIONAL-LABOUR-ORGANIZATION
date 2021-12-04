import React from "react";
import CoursesCard, { CoursesCardProps } from "./components/CoursesCard";
import Layout, { Header } from "@common/components/Layout";
import HandWritingImage from "@public/images/hand-writing.jpg";
import CardSampleImage from "@public/images/card-sample-3.jpg";
import CoursesFilter from "./components/CoursesFilter";
import { useRouter } from "next/router";
import CoursesCertificate from "./components/CoursesCertificate";
import useTranslation from "next-translate/useTranslation";

const TITLE_DESCRIPTION = [
  {
    key: "allUnitsDescription",
    route: "all",
  },
  {
    key: "inProgressDescription",
    route: "in-progress",
  },
  {
    key: "completedDescription",
    route: "completed",
  },
  {
    key: "certificateDescription",
    route: "certificate",
  },
];

const CoursesMain = ({ allCourseCardsData }: any) => {
  const { t, lang } = useTranslation("courses");

  console.log(lang);
  const router = useRouter();

  const filteredTitleDescriptions = TITLE_DESCRIPTION.filter(
    (titleDescription) => {
      return titleDescription.route === router.query.category;
    }
  );

  const filteredCourseCardsData = allCourseCardsData.filter(
    (courseCardsData: CoursesCardProps) => {
      return courseCardsData.status === router.query.category;
    }
  );

  const getCoursesByCategory = (category?: string | string[]) => {
    switch (category) {
      case "all": {
        return allCourseCardsData;
      }
      case "certificate": {
        return filteredCourseCardsData;
      }
      default:
        return filteredCourseCardsData;
    }
  };

  return (
    <Layout header={<Header title={"Header"} />}>
      <section className="courses-main-section">
        <CoursesFilter />
        {filteredTitleDescriptions.map((titleDescription, idx) => (
          <div className="courses-description" key={idx}>
            {t(titleDescription.key)}
          </div>
        ))}

        <div className="courses-main-card-container">
          {getCoursesByCategory(router?.query?.category).map(
            (course: CoursesCardProps, index: number) => (
              <CoursesCard
                unit={course?.unit}
                title={course?.title}
                slug={course?.slug}
                description={course?.description}
                thumbnail={course?.thumbnail}
                percentage={course?.percentage}
                key={index}
              />
            )
          )}
          <div
            className={`${
              router.query.category !== "certificate"
                ? "certificate-container"
                : ""
            }`}
          >
            <CoursesCertificate />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CoursesMain;
