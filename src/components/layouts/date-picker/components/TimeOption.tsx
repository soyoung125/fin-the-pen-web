import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

import "swiper/css";
import "swiper/css/pagination";

import { Mousewheel } from "swiper/modules";
import { ChangeTimeType } from "@components/layouts/date-picker/components/SelectTime.tsx";

interface SelectTimeProps {
  timeOption: string[] | number[];
  selected: number;
  type: ChangeTimeType;
  changeTime: (timeType: ChangeTimeType, select: number) => void;
}

function TimeOption({
  timeOption,
  selected,
  type,
  changeTime,
}: SelectTimeProps) {
  const [swiper, setSwiper] = useState<SwiperType>();
  const lastIndex = timeOption.length + 2;
  const index = swiper?.activeIndex ?? 0;
  const prevIndex = 3;

  useEffect(() => {
    if (index < prevIndex) {
      swiper?.slideTo(prevIndex);
    }

    if (index > lastIndex) {
      swiper?.slideTo(lastIndex);
    }
  }, [swiper?.activeIndex]);

  return (
    <Swiper
      direction={"vertical"}
      centeredSlides={true}
      slidesPerView={7}
      speed={100}
      style={{ height: "210px" }}
      mousewheel={true}
      modules={[Mousewheel]}
      allowSlidePrev={index === prevIndex ? false : true}
      allowSlideNext={index === lastIndex ? false : true}
      onSlideChange={(swiper) =>
        changeTime(type, swiper.activeIndex - prevIndex)
      }
      onSwiper={(swiper) => {
        swiper.slideTo(selected + prevIndex);
        setSwiper(swiper);
      }}
      slideToClickedSlide={true}
    >
      <SwiperSlide />
      <SwiperSlide />
      <SwiperSlide />
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
      <SwiperSlide />
      <SwiperSlide />
      <SwiperSlide />
    </Swiper>
  );
}

export default TimeOption;
