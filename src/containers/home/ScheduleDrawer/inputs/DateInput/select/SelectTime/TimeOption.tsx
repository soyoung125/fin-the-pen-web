// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Mousewheel } from "swiper/modules";
import { useEffect, useState } from "react";

interface SelectTimeProps {
  timeOption: string[] | number[];
  selected: number;
}

function TimeOption({ timeOption, selected }: SelectTimeProps) {
  const [swiper, setSwiper] = useState<SwiperType>();

  useEffect(() => {
    console.log(selected);
    swiper?.slideTo(selected);
  }, [selected]);

  return (
    <Swiper
      direction={"vertical"}
      centeredSlides={true}
      slidesPerView={7}
      speed={100}
      // freeMode={true}
      // scrollbar={true}
      style={{ height: "210px" }}
      mousewheel={true}
      modules={[Mousewheel]}
      onSlideChange={(swiper) => console.log(swiper)}
      onSwiper={(swiper) => {
        swiper.slideTo(selected);
        setSwiper(swiper);
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
