import React from "react";
import { useRouter } from "next/router";

const CoursesFilter = () => {
  const router = useRouter();

  const isActiveAllUnit = router.query.category === "all";
  const isActiveInProgress = router.query.category === "in-progress";
  const isCompleted = router.query.category === "completed";
  const isCertificate = router.query.category === "certificate";

  const handleAllUnitClick = () => {
    router.push("/courses-main/all", undefined, { scroll: false });
  };

  const handleInProgressClick = () => {
    router.push("/courses-main/in-progress", undefined, { scroll: false });
  };

  const handleCompleteClick = () => {
    router.push("/courses-main/completed", undefined, { scroll: false });
  };

  const handleCertificateClick = () => {
    router.push("/courses-main/certificate", undefined, { scroll: false });
  };
  return (
    <div className="courses-filter-container">
      <div
        className={`${isActiveAllUnit ? "-active-filter" : "default-filter"}`}
        onClick={handleAllUnitClick}
      >
        All Units
      </div>
      <div
        className={`${
          isActiveInProgress ? "-active-filter" : "default-filter"
        }`}
        onClick={handleInProgressClick}
      >
        In Progress
      </div>
      <div
        className={`${isCompleted ? "-active-filter" : "default-filter"}`}
        onClick={handleCompleteClick}
      >
        Completed
      </div>
      <div
        className={`${isCertificate ? "-active-filter" : "default-filter"}`}
        onClick={handleCertificateClick}
      >
        Certificate
      </div>
    </div>
  );
};

export default CoursesFilter;
