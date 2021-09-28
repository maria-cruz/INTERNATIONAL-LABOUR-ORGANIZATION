import React from "react";
import CoursesCard, { CoursesCardProps } from "./components/CoursesCard";
import Layout, { Header } from "@common/components/Layout";
import HandWritingImage from "@public/images/hand-writing.jpg";

const CARD_DETAILS_SAMPLE = [
  {
    unit: "Unit 1",
    title: "The Employment Contract. (Conclusion, Execution and Termination)",
    description:
      "By the end of this unit, the trainee will be able to understand the nature of work contracts, their contents and types, and the rights and duties of each of the parties to the contract stipulated in the relevant laws and regulations and will also be able to distinguish between those subject to and excluded from the provisions of these laws.",
    logo: HandWritingImage,
  },
  {
    unit: "Unit 2",
    title: "Termination of Employment Contracts.",
    description:
      "By the end of this unit, the trainee will be able to distinguish between justified and unjustified termination cases of employment contracts and the conditions and legal consequences of their termination.",
    logo: HandWritingImage,
  },
  {
    unit: "Unit 3",
    title: "Social Security and Work Emergencies.",
    description:
      "By the end of this unit, the trainee will become familiar with the social guarantees secured by the National Social Security Fund and will be able to understand how to adhere to and benefit from these guarantees.",
    logo: HandWritingImage,
  },
];
const CoursesMain = () => {
  return (
    <Layout header={<Header title={"Header"} />}>
      <section className="courses-main-section">
        <div className="courses-main-card-container">
          {CARD_DETAILS_SAMPLE.map((item: CoursesCardProps) => (
            <CoursesCard
              unit={item.unit}
              title={item.title}
              description={item.description}
              logo={item.logo}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default CoursesMain;
