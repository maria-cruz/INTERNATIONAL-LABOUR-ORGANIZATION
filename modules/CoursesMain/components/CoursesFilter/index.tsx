import React from "react";
import { useRouter } from "next/router";
import CategorySlide from "@common/components/CategorySlide";

const PATHNAME = "/courses";
const QUERY_KEY = "category";
const CATEGORIES = [
  { key: "allUnits", value: "all" },
  { key: "inProgress", value: "in-progress" },
  { key: "completed", value: "completed" },
  { key: "certificate", value: "certificate" },
];

const CoursesFilter = () => {
  const router = useRouter();

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
        currentCategory={router?.query[QUERY_KEY]}
        onClick={handleFilterClick}
      />
    </div>
  );
};

export default CoursesFilter;
