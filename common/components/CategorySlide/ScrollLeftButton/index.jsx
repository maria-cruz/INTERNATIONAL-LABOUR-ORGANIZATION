import React from 'react';
import sideScroll from '../utils/sideScroll';
import classNames from 'classnames';
import { LeftOutlined } from '@ant-design/icons';

const ScrollLeftButton = ({ elementRef, disable } = '') => {
  const handleLeftArrowMouseDown = () => {
    sideScroll(elementRef, 'left', 1, 1000, 2);
  };

  const handleLeftArrowMouseUp = (e) => {
    e.preventDefault();
    sideScroll(elementRef, 'stop');
  };

  return (
    <div
      className={classNames('scroll-left-btn-container', {
        'start-scroll': disable,
      })}
    >
      <button
        onTouchStart={handleLeftArrowMouseDown}
        onTouchEnd={handleLeftArrowMouseUp}
        onMouseDown={handleLeftArrowMouseDown}
        onMouseUp={handleLeftArrowMouseUp}
        className={classNames('scroll-left-btn', {
          'start-scroll': disable,
        })}
      >
        <LeftOutlined />
      </button>
    </div>
  );
};

export default ScrollLeftButton;
