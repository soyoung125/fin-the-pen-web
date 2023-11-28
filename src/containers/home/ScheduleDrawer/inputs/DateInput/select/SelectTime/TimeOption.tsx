import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Mousewheel } from "swiper/modules";

interface SelectTimeProps {
  timeOption: string[] | number[];
  selected: number;
  type: string;
  changeTime: (timeType: string, select: number) => void;
}

function TimeOption({
  timeOption,
  selected,
  type,
  changeTime,
}: SelectTimeProps) {
  return (
    <Swiper
      direction={"vertical"}
      centeredSlides={true}
      slidesPerView={7}
      speed={100}
      style={{ height: "210px" }}
      mousewheel={true}
      modules={[Mousewheel]}
      onSlideChange={(swiper) => changeTime(type, swiper.activeIndex)}
      onSwiper={(swiper) => {
        swiper.slideTo(selected);
      }}
    >
      {timeOption.map((i) => (
        <SwiperSlide key={Math.random()}>
          {({ isActive }) => (
            <div
              style={{
                fontSize: isActive ? "23px" : "18px",
                color: isActive ? "black" : "#AEAEAE",
              }}
            >
              {i}
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default TimeOption;
