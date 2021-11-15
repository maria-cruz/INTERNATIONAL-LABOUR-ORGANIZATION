import React from "react";
import { useRouter } from "next/router";
import CategorySlide from "@common/components/CategorySlide";

const PATHNAME = "/courses";
const QUERY_KEY = "category";
const QUERY_VALUE = {
  ALL: "all",
  IN_PROGRESS: "in-progress",
  COMPLETED: "completed",
  CERTIFICATE: "certificate",
};

// const CATEGORIES = ["All Units", "In Progress", "Completed", "Certificate"];
const CATEGORIES = [
  { label: "All Units", value: "all" },
  { label: "In Progress", value: "in-progress" },
  { label: "Completed", value: "completed" },
  { label: "Certificate", value: "certificate" },
];

const CoursesFilter = () => {
  const router = useRouter();

  const isActiveAllUnit = router.query[QUERY_KEY] === QUERY_VALUE.ALL;
  const isActiveInProgress =
    router.query[QUERY_KEY] === QUERY_VALUE.IN_PROGRESS;
  const isCompleted = router.query[QUERY_KEY] === QUERY_VALUE.COMPLETED;
  const isCertificate = router.query[QUERY_KEY] === QUERY_VALUE.CERTIFICATE;

  const handleFilterClick = (category: string) => () => {
    router.push(`${PATHNAME}?${QUERY_KEY}=${category}`, undefined, {
      shallow: true,
    });
  };

  return (
    <div className="courses-filter-container">
      <CategorySlide
        className="result-preview-category"
        categories={CATEGORIES}
        currentCategory={"All Units"}
        onClick={handleFilterClick}
      />
      {/* <div
        className={`${isActiveAllUnit ? "-active-filter" : "default-filter"}`}
        onClick={handleFilterClick(QUERY_VALUE.ALL)}
      >
        All Units
      </div>
      <div
        className={`${
          isActiveInProgress ? "-active-filter" : "default-filter"
        }`}
        onClick={handleFilterClick(QUERY_VALUE.IN_PROGRESS)}
      >
        In Progress
      </div>
      <div
        className={`${isCompleted ? "-active-filter" : "default-filter"}`}
        onClick={handleFilterClick(QUERY_VALUE.COMPLETED)}
      >
        Completed
      </div>
      <div
        className={`${isCertificate ? "-active-filter" : "default-filter"}`}
        onClick={handleFilterClick(QUERY_VALUE.CERTIFICATE)}
      >
        Certificate
      </div> */}
    </div>
  );
};

export default CoursesFilter;
