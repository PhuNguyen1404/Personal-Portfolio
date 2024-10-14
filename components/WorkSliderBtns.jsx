"use client";

import { useSwiper } from "swiper/react";
import { FaChevronLeft , FaChevronRight  } from "react-icons/fa";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <FaChevronLeft className={iconStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <FaChevronRight className={iconStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
