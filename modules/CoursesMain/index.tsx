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

  const data = TITLE_DESCRIPTION.filter((item) => {
    return item.route === router.query.category;
  });

  const sampleData = allCourseCardsData.filter((item: CoursesCardProps) => {
    return item.status === router.query.category;
  });

  const getDataByCategory = (category?: string | string[]) => {
    switch (category) {
      case "all": {
        return allCourseCardsData;
      }
      case "certificate": {
        return allCourseCardsData;
      }
      default:
        return sampleData;
    }
  };

  return (
    <Layout header={<Header title={"Header"} />}>
      <section className="courses-main-section">
        <CoursesFilter />
        {data.map((item, idx) => (
          <div className="courses-description" key={idx}>
            {item.subheading}
          </div>
        ))}
        <div className="courses-main-card-container">
          {getDataByCategory(router?.query?.category).map(
            (item: CoursesCardProps, index: number) => (
              <div
                className={`${
                  router.query.category === "certificate" ? "courses-card" : ""
                }`}
                key={index}
              >
                <CoursesCard
                  unit={item?.unit}
                  title={item?.title}
                  slug={item?.slug}
                  description={item?.description}
                  thumbnail={item?.thumbnail}
                  percentage={item?.percentage}
                />
              </div>
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
