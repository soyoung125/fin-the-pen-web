import ResetButton from "@components/common/ResetButton.tsx";
import { Stack, Tab, Tabs } from "@mui/material";

interface ScheduleDrawerHeaderProps {
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
  handleReset: () => void;
}

function ScheduleDrawerHeader({
  value,
  handleChange,
  handleReset,
}: ScheduleDrawerHeaderProps) {
  return (
    <Stack direction="row" justifyContent="space-between" mx={2.5}>
      <ResetButton handleClick={handleReset} />
      <Tabs value={value} onChange={handleChange}>
        <Tab label="일정" />
        <Tab label="자산" />
      </Tabs>
    </Stack>
  );
}

export default ScheduleDrawerHeader;
