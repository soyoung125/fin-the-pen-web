import { Tab, Tabs } from "@mui/material";

interface ScheduleDrawerHeaderProps {
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

function ScheduleDrawerHeader({
  value,
  handleChange,
}: ScheduleDrawerHeaderProps) {
  return (
    <Tabs value={value} onChange={handleChange}>
      <Tab label="일정" />
      <Tab label="자산" />
    </Tabs>
  );
}

export default ScheduleDrawerHeader;
