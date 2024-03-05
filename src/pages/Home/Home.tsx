import { SyntheticEvent, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { changeViewMode } from "@redux/slices/scheduleSlice.tsx";
import { setIsAuthenticatedFalse } from "@redux/slices/commonSlice.tsx";
import useHeader from "@hooks/useHeader.ts";
import { VIEW_MODE } from "@constants/schedule.ts";
import { useAppDispatch, useAppSelector } from "@redux/hooks.ts";
import { selectIsBudgetHidden } from "@redux/slices/settingSlice.ts";
import { HEADER_MODE } from "@app/types/common.ts";
import SelectYearMonth from "@components/common/SelectYearMonth";
import moment from "moment";
import MenuTab from "@pages/Home/next-components/HomeHeader/MenuTab";
import useHome from "@hooks/useHome.ts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import WeekSchedulePage from "@pages/Home/pages/WeekSchedulePage/WeekSchedulePage.tsx";
import MonthSchedulePage from "@pages/Home/pages/MonthSchedulePage/MonthSchedulePage.tsx";
import DaySchedulePage from "@pages/Home/pages/DaySchedulePage/DaySchedulePage.tsx";

function Home() {
  const dispatch = useAppDispatch();
  const isHideBudgetMode = useAppSelector(selectIsBudgetHidden);
  const {
    date,
    subtractMonth,
    addMonth,
    pickMonth,
    addDay,
    subtractDay,
    pickDay,
  } = useHome();
  const labels = ["월 별", "주 별", "일 별"];
  const [value, setValue] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType>();

  const handleChangeTab = (event: SyntheticEvent, newValue: number) => {
    swiper?.slideTo(newValue);
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(changeViewMode(VIEW_MODE.schedule));
    if (isHideBudgetMode) {
      dispatch(setIsAuthenticatedFalse());
    }
  }, []);

  useHeader(true, HEADER_MODE.home);

  return (
    <>
      <Box my={1} mx={2.5}>
        {value === 2 ? (
          <SelectYearMonth
            date={moment(date).format("YYYY년 M월 D일")}
            lastMonth={subtractDay}
            nextMonth={addDay}
            changeYearAndMonth={pickDay}
          />
        ) : (
          <SelectYearMonth
            date={moment(date).format("YYYY년 M월")}
            lastMonth={subtractMonth}
            nextMonth={addMonth}
            changeYearAndMonth={pickMonth}
          />
        )}
      </Box>

      <MenuTab labels={labels} value={value} handleChange={handleChangeTab} />

      <Swiper
        className="mySwiper"
        spaceBetween={50}
        autoHeight={true}
        onSlideChange={(e) => setValue(e.activeIndex)}
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        <SwiperSlide style={{ overflow: "scroll" }}>
          <MonthSchedulePage />
        </SwiperSlide>
        <SwiperSlide>
          <WeekSchedulePage />
        </SwiperSlide>
        <SwiperSlide>
          <DaySchedulePage />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Home;
