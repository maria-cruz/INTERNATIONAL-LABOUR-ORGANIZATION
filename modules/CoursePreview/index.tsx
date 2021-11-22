import Layout, { Header } from "@common/components/Layout";
import React from "react";
import CarouselBanner from "./components/CarouselBanner";
import CourseTabs from "@common/components/CourseTabs";

interface CoursePreviewProps {
  coursePreviewData: any;
}

const CoursePreview = ({ coursePreviewData }: CoursePreviewProps) => {
  const {
    unit,
    title,
    description,
    progress,
    objectives,
    topicsCount,
    prevSlug,
    nextSlug,
  } = coursePreviewData;

  const unitDetailsProps = {
    topicsCount,
    progress,
    description,
    objectives,
  };

  return (
    <Layout header={<Header title={"Header"} />}>
      <div className="course-preview-container">
        <div className="course-details-container">
          <CarouselBanner
            unit={unit}
            title={title}
            prevSlug={prevSlug}
            nextSlug={nextSlug}
          />

          <CourseTabs unitDetailsProps={unitDetailsProps} />
        </div>
      </div>
    </Layout>
  );
};

export default CoursePreview;
