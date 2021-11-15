let scrollAmount;
let slideTimer;

const sideScroll = (element, direction, speed, distance, step) => {
  if (direction == 'stop' && typeof window !== 'undefined') {
    window.clearInterval(slideTimer);
    return;
  }

  scrollAmount = 0;
  slideTimer = setInterval(() => {
    if (direction == 'left') {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance && typeof window !== 'undefined') {
      window.clearInterval(slideTimer);
    }
  }, speed);
};

export default sideScroll;
