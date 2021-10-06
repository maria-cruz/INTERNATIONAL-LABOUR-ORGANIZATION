import Layout, { Header } from "@common/components/Layout";
import React from "react";
import Image from "next/image";
import FAQBackground from "@public/images/FAQ-banner.jpg";
import UnitHeader from "./components/UnitHeader";
import QuestionForm from "./components/QuestionForm";
import SearchQuestion from "./components/SearchQuestion";

const FAQ = () => {
  return (
    <Layout header={<Header title={"Header"} />}>
      <section className="FAQ-section">
        <div className="faq-bg">
          <Image
            src={FAQBackground}
            height={513}
            width={1920}
            alt="FAQ-banner.jpg"
            placeholder="blur"
          />
        </div>
        <div className="unit-container">
          <div className="unit-wrapper">
            <UnitHeader />

            <SearchQuestion />
          </div>
        </div>
        <QuestionForm />
      </section>
    </Layout>
  );
};

export default FAQ;
