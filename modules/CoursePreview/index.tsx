import Layout, { Header } from "@common/components/Layout";
import React from "react";
import CarouselBanner from "./components/CarouselBanner";
import CourseTabs from "@common/components/CourseTabs";
import getStrapiFileUrl from "@common/utils/getStrapiFileUrl";

interface CoursePreviewProps {
  coursePreviewData: any;
  courseComments: any;
}

const CoursePreview = ({
  coursePreviewData,
  courseComments,
}: CoursePreviewProps) => {
  const {
    id,
    unit,
    title,
    description,
    progress,
    objectives,
    topicsCount,
    instructor,
    prevSlug,
    nextSlug,
  } = coursePreviewData;

  const unitDetailsProps = {
    instructorAvatar: getStrapiFileUrl(instructor?.avatar?.url),
    instructorName: instructor?.name,
    topicsCount,
    progress,
    description,
    objectives,
  };

  const unitQandAProps = {
    courseId: id,
    courseComments: courseComments,
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

          <CourseTabs
            unitDetailsProps={unitDetailsProps}
            unitQandAProps={unitQandAProps}
          />
        </div>
      </div>
    </Layout>
  );
};

export default CoursePreview;
