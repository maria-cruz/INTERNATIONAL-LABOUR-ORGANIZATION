import React from "react";
import CoursesCard, { CoursesCardProps } from "./components/CoursesCard";
import Layout, { Header } from "@common/components/Layout";
import HandWritingImage from "@public/images/hand-writing.jpg";
import CardSampleImage from "@public/images/card-sample-3.jpg";
import CoursesFilter from "./components/CoursesFilter";
import { useRouter } from "next/router";
import CoursesCertificate from "./components/CoursesCertificate";

const CARD_DETAILS_SAMPLE = [
  {
    unit: "Unit 1",
    title: "The Employment Contract. (Conclusion, Execution and Termination)",
    description:
      "By the end of this unit, the trainee will be able to understand the nature of work contracts, their contents and types, and the rights and duties of each of the parties to the contract stipulated in the relevant laws and regulations and will also be able to distinguish between those subject to and excluded from the provisions of these laws.",
    logo: HandWritingImage,
    percentage: 100,
    status: "completed",
  },
  {
    unit: "Unit 2",
    title: "Termination of Employment Contracts.",
    description:
      "By the end of this unit, the trainee will be able to distinguish between justified and unjustified termination cases of employment contracts and the conditions and legal consequences of their termination.",
    logo: CardSampleImage,
    percentage: 14,
    status: "in-progress",
  },
  {
    unit: "Unit 3",
    title: "Social Security and Work Emergencies.",
    description:
      "By the end of this unit, the trainee will become familiar with the social guarantees secured by the National Social Security Fund and will be able to understand how to adhere to and benefit from these guarantees.",
    logo: CardSampleImage,
    percentage: 0,
    status: "",
  },
];
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
const CoursesMain = () => {
  const router = useRouter();

  const data = TITLE_DESCRIPTION.filter((item) => {
    return item.route === router.query.category;
  });

  const sampleData = CARD_DETAILS_SAMPLE.filter((item: CoursesCardProps) => {
    return item.status === router.query.category;
  });

  const getDataByCategory = (category?: string | string[]) => {
    switch (category) {
      case "all": {
        return CARD_DETAILS_SAMPLE;
      }
      case "certificate": {
        return CARD_DETAILS_SAMPLE;
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
            (item: CoursesCardProps, index) => (
              <div
                className={`${
                  router.query.category === "certificate" ? "courses-card" : ""
                }`}
                key={index}
              >
                <CoursesCard
                  unit={item.unit}
                  title={item.title}
                  description={item.description}
                  logo={item.logo}
                  percentage={item.percentage}
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
