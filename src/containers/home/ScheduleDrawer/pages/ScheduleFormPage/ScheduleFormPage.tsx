import NameInput from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/NameInput.tsx";
import CategoryInput from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/CategoryInput.tsx";
import { SCHEDULE_DRAWER_MODE } from "../../../../../constants/schedule.tsx";
import { Button, Stack } from "@mui/material";
import ThickDivider from "@components/common/ThickDivider.tsx";
import DateInput from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/DateInput";
import RepeatInput from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatInput";
import { ScheduleDrawerModeValue } from "@type/schedule.tsx";
import { useSelector } from "react-redux";
import { selectSchedule } from "@redux/slices/scheduleSlice.tsx";
import { useState } from "react";

export interface ScheduleFormPageProps {
  mode: ScheduleDrawerModeValue;
  showError: boolean;
}

function ScheduleFormPage({ mode, showError }: ScheduleFormPageProps) {
  const schedule = useSelector(selectSchedule);
  const [isCategoryPickerOpen, setIsCategoryPickerOpen] = useState(false);

  return (
    <>
      {schedule && (
        <Stack spacing={2} pt={2}>
          {/* 이벤트 제목 */}
          <NameInput showError={showError} />

          {/* 이벤트 카테고리 */}
          <CategoryInput
            selected={
              mode === SCHEDULE_DRAWER_MODE.create ? "" : schedule.category
            }
            showError={showError}
          />
          <Button>일정 카테고리 선택하기 (임시)</Button>
          <ThickDivider />

          {/* 이벤트 일정 */}
          <DateInput showError={showError} />

          <ThickDivider />

          {/* 이벤트 반복 설정 */}
          <RepeatInput />
        </Stack>
      )}
    </>
  );
}

export default ScheduleFormPage;
