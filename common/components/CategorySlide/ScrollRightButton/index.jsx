import React from 'react';
import sideScroll from '../utils/sideScroll';
import classNames from 'classnames';
import { RightOutlined } from '@ant-design/icons';

const ScrollRightButton = ({ elementRef, disable } = '') => {
  const handleRightArrowMouseDown = () => {
    sideScroll(elementRef, 'right', 1, 1000, 2);
  };

  const handleRightArrowMouseUp = (e) => {
    e.preventDefault();
    sideScroll(elementRef, 'stop');
  };

  return (
    <div
      className={classNames('scroll-right-btn-container', {
        'end-scroll': disable,
      })}
    >
      <button
        onTouchStart={handleRightArrowMouseDown}
        onTouchEnd={handleRightArrowMouseUp}
        onMouseDown={handleRightArrowMouseDown}
        onMouseUp={handleRightArrowMouseUp}
        className={'scroll-right-btn'}
      >
        <RightOutlined />
      </button>
    </div>
  );
};

export default ScrollRightButton;
