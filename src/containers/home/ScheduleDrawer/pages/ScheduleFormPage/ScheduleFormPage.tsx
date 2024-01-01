import NameInput from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/NameInput.tsx";
import CategoryInput from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/CategoryInput.tsx";
import { Stack } from "@mui/material";
import ThickDivider from "@components/common/ThickDivider.tsx";
import DateInput from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/DateInput";
import RepeatInput from "@containers/home/ScheduleDrawer/pages/ScheduleFormPage/components/RepeatInput";
import { useSelector } from "react-redux";
import { selectSchedule } from "@redux/slices/scheduleSlice.tsx";
import { Dispatch, SetStateAction } from "react";

export interface ScheduleFormPageProps {
  showError: boolean;
  setIsCategoryPickerOpen: Dispatch<SetStateAction<boolean>>;
  setIsRepeatPickerOpen: Dispatch<SetStateAction<boolean>>;
}

function ScheduleFormPage({
  showError,
  setIsCategoryPickerOpen,
  setIsRepeatPickerOpen,
}: ScheduleFormPageProps) {
  const schedule = useSelector(selectSchedule);
  if (schedule) {
    return (
      <Stack spacing={2} pt={2}>
        {/* 이벤트 제목 */}
        <NameInput showError={showError} />

        {/* 이벤트 카테고리 */}
        <CategoryInput
          selectedCategory={schedule.category}
          showError={showError}
          onClick={() => setIsCategoryPickerOpen((prev) => !prev)}
        />
        <ThickDivider />

        {/* 이벤트 일정 */}
        <DateInput showError={showError} />

        <ThickDivider />

        {/* 이벤트 반복 설정 */}
        <RepeatInput
          repeatType={schedule.repeat.kind_type}
          onClick={() => setIsRepeatPickerOpen((prev) => !prev)}
        />
      </Stack>
    );
  }

  return <></>;
}

export default ScheduleFormPage;
