import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import RightButton from "./ScrollRightButton";
import ScrollLeftButton from "./ScrollLeftButton";

const CategorySlide = ({
  className = "",
  onClick,
  currentCategory,
  categories,
}) => {
  const [activeCategory, setActiveCategory] = useState("");
  const [scrollStatus, setScrollStatus] = useState({
    isStartScroll: true,
    isEndScroll: false,
  });
  const scrollElementRef = useRef();
  const ContentWrapperElement =
    scrollElementRef?.current?.contentWrapperEl || "";

  useEffect(() => {
    setActiveCategory(currentCategory);
  }, [currentCategory]);

  useEffect(() => {
    handleScroll();
    scrollElementRef.current
      .getScrollElement()
      .addEventListener("scroll", handleScroll);

    return () => {
      scrollElementRef.current
        .getScrollElement()
        .removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isEndOfSlide = () => {
    const { scrollLeft, clientWidth, scrollWidth } =
      scrollElementRef.current.contentWrapperEl;
    return scrollWidth - scrollLeft - clientWidth <= 1;
  };

  const isStartOfSlide = () => {
    const { scrollLeft } = scrollElementRef.current.contentWrapperEl;
    return scrollLeft <= 0;
  };

  const handleScroll = () => {
    if (isStartOfSlide() && isEndOfSlide()) {
      setScrollStatus({ isStartScroll: true, isEndScroll: true });
      return;
    }

    if (!isStartOfSlide() && !isEndOfSlide()) {
      setScrollStatus({ isStartScroll: false, isEndScroll: false });
      return;
    }

    if (isStartOfSlide() && !isEndOfSlide()) {
      setScrollStatus({ isStartScroll: true, isEndScroll: false });
    }

    if (isEndOfSlide() && !isStartOfSlide()) {
      setScrollStatus({ isStartScroll: false, isEndScroll: true });
    }
  };

  if (typeof window !== "undefined") {
    window.onresize = handleScroll;
  }

  return (
    <div className={`result-category-container ${className}`}>
      <SimpleBar className="result-category" ref={scrollElementRef}>
        {categories.map((category, index) => {
          const categoryName = category.label || "";
          const isCategoryActive = categoryName === activeCategory;
          return (
            <div className="text-link-container" key={index}>
              <button
                className={classNames("text-link-label", {
                  "text-link-label-active": isCategoryActive,
                })}
                onClick={onClick(category.value)}
              >
                {categoryName}
              </button>
            </div>
          );
        })}
      </SimpleBar>
      <ScrollLeftButton
        elementRef={ContentWrapperElement}
        disable={scrollStatus.isStartScroll}
      />
      <RightButton
        elementRef={ContentWrapperElement}
        disable={scrollStatus.isEndScroll}
      />
    </div>
  );
};

export default CategorySlide;
