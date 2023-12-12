import {
  Alert,
  Box,
  Button,
  Slide,
  SlideProps,
  Snackbar,
  Stack,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import NameInput from "./inputs/NameInput";
import DateInput from "./inputs/DateInput";
import { SCHEDULE_DRAWER_MODE } from "../../../constants/schedule";
import {
  selectSchedule,
  setDrawerSchedule,
} from "../../../app/redux/slices/scheduleSlice";
import CategoryInput from "./inputs/CategoryInput";
import RepeatInput from "./inputs/RepeatInput";
import AssetSettings from "./inputs/AssetSettings";
import ScheduleDrawerHeader from "./layouts/ScheduleDrawerHeader";
import ScheduleDrawerFooter from "./layouts/ScheduleDrawerFooter";
import { CONSUMPTION_ALERTS } from "../../../constants/alerts";
import { Schedule, ScheduleDrawerModeValue } from "../../../types/schedule";
import { useAppDispatch } from "../../../app/redux/hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import ThickDivider from "@components/common/ThickDivider";
import { useDatePicker } from "@components/layouts/date-picker/hooks/useDatePicker.tsx";
import moment from "moment";

function TransitionUp(props: SlideProps) {
  return <Slide {...props} direction="right" />;
}

interface ScheduleDrawerProps {
  setDrawerWidth: React.Dispatch<React.SetStateAction<number>>;
  handleClose: () => void;
  data: Schedule;
  mode: ScheduleDrawerModeValue;
}

function ScheduleDrawer({
  setDrawerWidth,
  handleClose,
  data,
  mode,
}: ScheduleDrawerProps) {
  // 추후 삭제 예정
  const random = Math.floor(Math.random() * 4); // 현재 CONSUMPTION_ALERTS의 길이가 4임

  const dispatch = useAppDispatch();
  const schedule = useSelector(selectSchedule);

  const [snackbarOpen, setSnackbarOpen] = useState(true);
  const [showError, setShowError] = useState(false);
  const [value, setValue] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType>();

  const { pickHHMM } = useDatePicker();
  const [time, setTime] = useState<string>(moment().format("HH:mm"));
  const onClick = async () => {
    const answer = await pickHHMM();
    setTime(answer);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    swiper?.slideTo(newValue);
    setValue(newValue);
  };

  const handleReset = () => {
    setShowError(false);
    dispatch(setDrawerSchedule(data));
  };

  useEffect(() => {
    if (data) {
      dispatch(setDrawerSchedule(data));
    }
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // 현재 버그 있음
    console.log("width", ref.current ? ref.current.offsetWidth : 0);
    setDrawerWidth(ref.current ? ref.current.offsetWidth : 0);
  }, [ref.current]);

  return (
    <div ref={ref} style={{ height: "100%" }}>
      {schedule && (
        <Box sx={{ height: "100%", pt: 1, mb: 3 }}>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            autoHideDuration={5000}
            open={snackbarOpen}
            onClose={() => {
              setSnackbarOpen(false);
            }}
            TransitionComponent={TransitionUp}
          >
            <Alert
              color={CONSUMPTION_ALERTS[random].color}
              sx={{ width: "100%" }}
              icon={CONSUMPTION_ALERTS[random].icon}
            >
              {CONSUMPTION_ALERTS[random].message}
            </Alert>
          </Snackbar>

          <ScheduleDrawerHeader
            value={value}
            handleChange={handleChange}
            handleReset={handleReset}
          />

          <Stack
            justifyContent="space-between"
            spacing={2}
            sx={{ height: `calc(100% - 56px)` }}
            onTouchStart={(e) => e.stopPropagation()}
          >
            <Swiper
              className="mySwiper"
              style={{
                width: "100%",
              }}
              spaceBetween={50}
              onSlideChange={(e) => setValue(e.activeIndex)}
              onSwiper={(swiper) => setSwiper(swiper)}
            >
              <SwiperSlide style={{ overflow: "scroll" }}>
                <Stack spacing={2} pt={2}>
                  {/* 이벤트 제목 */}
                  <NameInput showError={showError} />

                  {/* 이벤트 카테고리 */}
                  <CategoryInput
                    selected={
                      mode === SCHEDULE_DRAWER_MODE.create
                        ? ""
                        : schedule.category
                    }
                    showError={showError}
                  />
                  <ThickDivider />

                  {/* 이벤트 일정 */}
                  <DateInput showError={showError} />

                  <Button onClick={onClick}>{time}</Button>
                  <ThickDivider />

                  {/* 이벤트 반복 설정 */}
                  <RepeatInput />
                </Stack>
              </SwiperSlide>
              <SwiperSlide>
                <AssetSettings mode={mode} />
              </SwiperSlide>
            </Swiper>

            {/* 제출 버튼 */}
            <ScheduleDrawerFooter
              mode={mode}
              handleClose={handleClose}
              setShowError={setShowError}
            />
          </Stack>
        </Box>
      )}
    </div>
  );
}

export default ScheduleDrawer;
