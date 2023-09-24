import { Box, Stack } from "@mui/material";
import "swiper/css";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import RoundedBorderBox from "../../../components/common/RoundedBorderBox";
import PATH from "../../../constants/path";
import { Schedule } from "../../../types/schedule";

interface DetailCardProps {
  data: Schedule[];
}

function DetailCard({ data }: DetailCardProps) {
  const navigate = useNavigate();
  const schedule = data[0];
  // console.log(data);
  return (
    <Box mb={1}>
      <RoundedBorderBox>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            p: 2,
          }}
        >
          <Box>
            <Box sx={{ mb: 1 }}>{`매${schedule.repeating_cycle.charAt(
              0
            )} ${moment(schedule.date).format("D일")}`}</Box>
            <Box>{schedule.event_name}</Box>
          </Box>
          <Box sx={{ textAlign: "end" }}>
            <Box
              sx={{ mb: 1 }}
              onClick={() =>
                navigate(PATH.DetailInformation, { state: { data } })
              }
            >
              {schedule.event_name}
            </Box>
            <Box sx={{ color: "primary.main" }}>
              {`${parseInt(schedule.expected_spending, 10).toLocaleString(
                "ko-kr"
              )}원`}
            </Box>
          </Box>
        </Stack>
      </RoundedBorderBox>
    </Box>
  );
}

export default DetailCard;
