import React from "react";
import router, { useRouter } from "next/router";
import ParamLink from "@common/components/ParamLink";
import BackArrow from "@common/components/Icons/BackArrow";
import CheckCircle from "@common/components/Icons/CheckCircle";
import VideoFrame from "@common/components/VideoFrame";

const UNIT_DETAILS_TAB = "unit-details";
const QNA_TAB = "qna";
const SELF_PRACTICE_TAB = "self-practice";

const Content = ({ data }: { data: any }) => {
  const { pathname, query: currentQuery } = useRouter();
  const isUnitDetailsActive = currentQuery.tab === UNIT_DETAILS_TAB;
  const isQNAActive = currentQuery.tab === QNA_TAB;
  const isSelfPracticeActive = currentQuery.tab === SELF_PRACTICE_TAB;
  const handleBackClick = () => {
    router.push("preview");
  };
  return (
    <div className="content-container">
      <header className="unit-header">
        <div className="back-button" onClick={handleBackClick}>
          <div className="back-icon"> {<BackArrow />}</div>
          <div className="back-text">Back</div>
        </div>
        <div className="title">
          Unit 1: The employment contract. (Conclusion, implementation and
          termination)
        </div>
      </header>

      <section className="unit-content">
        <div className="title">Session 1 - Post assessment</div>
        <VideoFrame url={data?.media_embed?.url || ""} />
      </section>

      <section className="unit-info">
        <div className="tabs">
          <ParamLink query={{ tab: UNIT_DETAILS_TAB }} isDefault={true}>
            Unit Details
          </ParamLink>
          <ParamLink query={{ tab: QNA_TAB }}>{"Q & A"}</ParamLink>
          <ParamLink query={{ tab: SELF_PRACTICE_TAB }}>
            Self Practice
          </ParamLink>
        </div>

        <div className={`unit-details-tab`}>
          <div className="row-container">
            <div className="profile">
              <div className="avatar"></div>
              <div className="name">Reyhan Mahfouz</div>
            </div>
            <div className="unit-topics">
              <div className="label">Unit topics:</div>
              <div className="count">7</div>
            </div>
          </div>

          <div className="description">
            By the end of this unit, the trainee will be able to understand the
            nature of work contracts, their contents and types, and the rights
            and duties of each of the parties to the contract stipulated in the
            relevant laws and regulations and will also be able to distinguish
            between those subject to and excluded from the provisions of these
            laws.
          </div>

          <div className="learning-objectives">
            <div className="title">Learning objectives</div>
            <div className="list">
              <div className="objective">
                <div className="objective-icon">
                  <CheckCircle height="24" width="24" />
                </div>
                <div className="objective-description">
                  Morbi auctor lacinia ornare. Sed venenatis viverra pretium.
                </div>
              </div>
              <div className="objective">
                <div className="objective-icon">
                  <CheckCircle height="24" width="24" />
                </div>
                <div className="objective-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  auctor lacinia ornare. Sed venenatis viverra pretium.
                  Suspendisse potenti.
                </div>
              </div>
              <div className="objective">
                <div className="objective-icon">
                  <CheckCircle height="24" width="24" />
                </div>
                <div className="objective-description">
                  Suspendisse potenti.
                </div>
              </div>
              <div className="objective">
                <div className="objective-icon">
                  <CheckCircle height="24" width="24" />
                </div>
                <div className="objective-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
              <div className="objective">
                <div className="objective-icon">
                  <CheckCircle height="24" width="24" />
                </div>
                <div className="objective-description">
                  Morbi auctor lacinia ornare. Sed venenatis viverra pretium.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
