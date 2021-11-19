import React from "react";
import CoursesCard, { CoursesCardProps } from "./components/CoursesCard";
import Layout, { Header } from "@common/components/Layout";
import HandWritingImage from "@public/images/hand-writing.jpg";
import CardSampleImage from "@public/images/card-sample-3.jpg";
import CoursesFilter from "./components/CoursesFilter";
import { useRouter } from "next/router";
import CoursesCertificate from "./components/CoursesCertificate";

const TITLE_DESCRIPTION = [
  {
    subheading:
      "Complete each unit in order. As you complete a unit the following unit will be unlocked. Once all three units are complete, you will receive your certificate.",
    route: "all",
  },
  {
    subheading: "You are currently working on the following unit",
    route: "in-progress",
  },
  {
    subheading: "You have competed the following units.",
    route: "completed",
  },
  {
    subheading:
      "Congratulations! Download your certificate of completion of the huqouqi fil 3amal course here.",
    route: "certificate",
  },
];

const CoursesMain = ({ allCourseCardsData }: any) => {
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
        return allCourseCardsData;
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
            {titleDescription.subheading}
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
