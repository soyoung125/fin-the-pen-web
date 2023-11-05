import {
  Alert,
  Box,
  Slide,
  SlideProps,
  Snackbar,
  Stack,
  Tab,
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

  const [expandAccordion, setExpandAccordion] = useState(
    mode !== SCHEDULE_DRAWER_MODE.create,
  );
  const [snackbarOpen, setSnackbarOpen] = useState(true);
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleExpand = () => {
    setExpandAccordion(!expandAccordion);
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
    <div ref={ref}>
      <Box>
        {schedule && (
          <Box sx={{ overflow: "scroll" }}>
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
            <Stack justifyContent="space-between" spacing={2} mx={2.5} mt={1}>
              <ScheduleDrawerHeader value={value} handleChange={handleChange} />

              {value === 0 ? (
                <>
                  {/* 이벤트 제목 */}
                  <NameInput />

                  {/* 이벤트 카테고리 */}
                  <CategoryInput
                    selected={
                      mode === SCHEDULE_DRAWER_MODE.create
                        ? ""
                        : schedule.category
                    }
                  />

                  {/* 이벤트 일정 */}
                  <DateInput />

                  {/* 이벤트 반복 설정 */}
                  <RepeatInput />
                </>
              ) : (
                <AssetSettings mode={mode} />
              )}

              {/* 제출 버튼 */}
              <ScheduleDrawerFooter mode={mode} handleClose={handleClose} />
            </Stack>
          </Box>
        )}
      </Box>
    </div>
  );
}
export default ScheduleDrawer;
<NameInput />;
