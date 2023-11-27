// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Mousewheel } from "swiper/modules";

interface SelectTimeProps {
  timeOption: string[] | number[];
}

function TimeOption({ timeOption }: SelectTimeProps) {
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
    >
      {timeOption.map((i) => (
        <SwiperSlide>
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
