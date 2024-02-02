import { Stack, Typography } from "@mui/material";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import moment from "moment";
import "moment/dist/locale/ko";

export interface CalendarHeaderProps {
  date: string;
  count: number;
  handleClick: () => void;
}

function CalendarHeader({ date, count, handleClick }: CalendarHeaderProps) {
  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      px={2.5}
      pt={3}
      pb={1}
    >
      <Typography variant="h1">
        {moment(date).format("M월 D일 dddd")}
      </Typography>
      <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
        {`총 ${count}건`}
      </Typography>
      <FormatListBulletedRoundedIcon onClick={handleClick} color={"primary"} />
    </Stack>
  );
}

export default CalendarHeader;
