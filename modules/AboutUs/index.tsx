import React from "react";
import Layout, { Header } from "@common/components/Layout";
import Image from "next/image";
import Banner from "@public/images/about-us-banner.jpg";
import BackgroundScope from "@public/images/background-scope.jpg";
import TrainingReferencesImage from "@public/images/training-references.jpg";

const AboutUs = () => {
  return (
    <Layout header={<Header title={"Header"} />}>
      <div className="about-us-section">
        <div className="about-us-banner">
          <Image
            src={Banner}
            height={513}
            width={1920}
            alt="banner.jpg"
            placeholder="blur"
          />
        </div>

        <div className="about-us-info">
          <div className="info-wrapper">
            <h1 className="about-us-label">About us</h1>
            <div className="about-us-description">
              This project aims to build capacity, knowledge and awareness for
              various stakeholders in relation to their rights and obligations
              at the workplace. The training program is intended to empower the
              trainees with the basic knowledge on the foundations, rights and
              fundamental mutual obligation upon signing an employment
              contracts.
            </div>
          </div>
        </div>

        <div className="gallery-section">
          <div className="gallery-wrapper">
            <div className="content-item">
              <div className="image-container">
                <Image
                  src={BackgroundScope}
                  alt="background-scope.jpg"
                  placeholder="blur"
                  width={960}
                  height={751}
                />
              </div>
            </div>

            <div className="content-item-info">
              <div className="info-wrapper">
                <div className="item-label">Background and scope</div>
                <div className="description-container">
                  The project is funded by the ILO and is in collaboration with
                  MoL; a joint effort to empower all stakeholders by providing a
                  solution that promotes awareness on Lebanese Labor Law. The
                  sessions are designed to be accessed in a synchronous mode
                  (live with the trainers) and in an asynchronous mode via a
                  portal where all the sessions are retained along with the
                  activities and assessments in order to ensure a wider target
                  audience and a sustainable, timely access to Labor law
                  training material that is especially designed to effectively
                  impact the stakeholders with reference to the variety of their
                  cultural, educational, and professional background.
                </div>
              </div>
            </div>

            <div className="content-item-info">
              <div className="info-wrapper _lower">
                <div className="item-label">Training references</div>
                <div className="description-container">
                  The training uses the Lebanese Labor Law, its amendments,
                  related decrees and ministerial decisions as sole references
                  for curriculum content. However, training activities and
                  assessments are conducted based on research, academic
                  resources and trainer’s experiences.
                </div>
              </div>
            </div>

            <div className="content-item">
              <div className="image-container">
                <Image
                  src={TrainingReferencesImage}
                  alt="training-references.jpg"
                  placeholder="blur"
                  width={960}
                  height={751}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
