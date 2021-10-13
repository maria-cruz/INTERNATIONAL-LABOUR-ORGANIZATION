import Layout, { Header } from "@common/components/Layout";
import Unit1 from "./Unit1";
import React from "react";

const CoursePreview = () => {
  return (
    <Layout header={<Header title={"Header"} />}>
      <section className="course-preview-section">
        <div className="course-details-container">
          <Unit1 />
        </div>
      </section>
    </Layout>
  );
};

export default CoursePreview;