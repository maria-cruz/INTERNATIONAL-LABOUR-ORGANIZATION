import Layout, { Header } from "@common/components/Layout";
import PreviewHeader from "./components/PreviewHeader";
import Unit1 from "./Unit1";
import React from "react";

const Preview = () => {
  return (
    <Layout header={<Header title={"Header"} />}>
      <section className="course-preview-section">
        <PreviewHeader />
        <Unit1 />
      </section>
    </Layout>
  );
};

export default Preview;
