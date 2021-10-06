import React from "react";
import { useRouter } from "next/router";

const UnitHeader = () => {
  const router = useRouter();

  const handleUnit1Click = () => {
    router.push("/faq/unit1", undefined, { scroll: false });
  };

  const handleUnit2Click = () => {
    router.push("/faq/unit2", undefined, { scroll: false });
  };

  const handleUnit3Click = () => {
    router.push("/faq/unit3", undefined, { scroll: false });
  };
  const isActiveUnit1 = router.query.unit === "unit1";
  const isActiveUnit2 = router.query.unit === "unit2";
  const isActiveUnit3 = router.query.unit === "unit3";

  return (
    <div className="unit-header-container">
      <div
        className={`${isActiveUnit1 ? "-active-filter" : "default-filter"}`}
        onClick={handleUnit1Click}
      >
        Unit 1
      </div>

      <div
        className={`${isActiveUnit2 ? "-active-filter" : "default-filter"}`}
        onClick={handleUnit2Click}
      >
        Unit 2
      </div>
      <div
        className={`${isActiveUnit3 ? "-active-filter" : "default-filter"}`}
        onClick={handleUnit3Click}
      >
        Unit 3
      </div>
    </div>
  );
};

export default UnitHeader;
