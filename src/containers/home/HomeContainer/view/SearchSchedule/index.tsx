import {
  Box,
  Button,
  ButtonBase,
  CardActionArea,
  Checkbox,
  Drawer,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import RoundedPaper from "../../../../../components/common/RoundedPaper";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../../../../../app/redux/hooks";
import { deleteSchedule } from "../../../../../app/redux/slices/scheduleSlice";
import RoundedBorderBox from "../../../../../components/common/RoundedBorderBox";
import moment from "moment";
import "moment/locale/ko";
import { Schedule } from "../../../../../types/schedule";
import ScheduleDrawer from "../../../ScheduleDrawer";
import { SCHEDULE_DRAWER_MODE } from "../../../../../constants/schedule";
import useSchedule from "../../../../../hooks/useSchedule";
import { fetchFindSchedules } from "../../../../../app/api/API";
import { useRecoilValue } from "recoil";
import { bottomTabMenuRepository } from "@app/recoil/bottomTabMenu";
import useHeader from "@hooks/useHeader";
import { HEADER_MODE } from "@app/recoil/header";

function SearchSchedule() {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [checkedSchedules, setCheckedSchedules] = useState<Schedule[]>([]);
  const [bottomDrawerOpen, setBottomDrawerOpen] = useState(false);
  const [drawerWidth, setDrawerWidth] = useState(0);
  const [resultSchedules, setResultSchedules] = useState<Schedule[]>([]);

  const { schedules, selectedSchedule, setSelectedSchedule } = useSchedule();
  const { openBottomBar, closeBottomBar } = useRecoilValue(bottomTabMenuRepository);

  useHeader(true, HEADER_MODE.search);

  useEffect(() => {
    closeBottomBar();
    return (() => openBottomBar());
  }, [])

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = async () => {
    if (inputRef.current) {
      const keyword = inputRef.current.value;
      const result = await fetchFindSchedules(keyword);
      if (result !== undefined) {
        setResultSchedules(result);
      } else {
        console.log("게스트 모드로 스케줄 검색");
        setResultSchedules([
          ...schedules.filter((s) =>
            s.event_name.toLowerCase().includes(keyword.toLowerCase())
          ),
        ]);
      }
    }
  };

  const handleClick = (schedule: Schedule) => {
    const idx = checkedSchedules.indexOf(schedule);
    if (idx < 0) {
      setCheckedSchedules(checkedSchedules.concat(schedule));
    } else {
      setCheckedSchedules(checkedSchedules.filter((s) => s !== schedule));
    }
  };

  const handleDelete = () => {
    if (window.confirm("선택 일정을 삭제 하시겠습니까?")) {
      checkedSchedules.map((s) => dispatch(deleteSchedule(s?.id || "")));
    }
  };

  const handleModify = (schedule: Schedule) => {
    setBottomDrawerOpen(true);
    setSelectedSchedule(schedule);
  };

  return (
    <>
      <Stack p={2} spacing={1}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 3,
            marginBottom: 1,
          }}
        >
          My 일정 검색하기
        </Typography>
        <RoundedPaper my={1}>
          <FormControl fullWidth>
            <OutlinedInput
              id="time"
              type="text"
              autoFocus
              onKeyDown={handleKeyPress}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleSearch}>
                    <SearchIcon color="primary" />
                  </IconButton>
                </InputAdornment>
              }
              size="small"
              inputRef={inputRef}
            />
          </FormControl>
          {resultSchedules.map((schedule, index) => (
            <CardActionArea
              key={Math.random()}
              onClick={() => handleModify(schedule)}
            >
              <Box pb={1} />
              <RoundedBorderBox greyBorder={true}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{ px: 1, py: 2 }}
                >
                  <Stack direction="row" spacing={1}>
                    <RoundedBorderBox greyBorder={true}>
                      <Box
                        onClick={(e) => {
                          e.stopPropagation();
                          handleClick(schedule);
                        }}
                        sx={{
                          width: "30px",
                          height: "100%",
                          display: "grid",
                          placeItems: "center",
                          color: checkedSchedules.includes(schedule)
                            ? "white"
                            : "#979797",
                          backgroundColor: checkedSchedules.includes(schedule)
                            ? "primary.main"
                            : "null",
                        }}
                      >
                        {index + 1}
                      </Box>
                    </RoundedBorderBox>
                    <Stack>
                      <Box>{moment(schedule.date).format("YYYY/MM/DD")}</Box>
                      <Box>{`${schedule.start_time}~${schedule.end_time}`}</Box>
                    </Stack>
                  </Stack>
                  <Stack alignItems="flex-end">
                    <Box>{schedule.event_name}</Box>
                    <Box>{`${schedule.type} ${schedule.expected_spending}`}</Box>
                  </Stack>
                </Stack>
              </RoundedBorderBox>
            </CardActionArea>
          ))}

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 1 }}
            disabled={checkedSchedules.length === 0}
            onClick={handleDelete}
          >
            선택 일정 삭제
          </Button>
        </RoundedPaper>
      </Stack>

      <Drawer
        open={bottomDrawerOpen}
        anchor="bottom"
        onClose={() => setBottomDrawerOpen(false)}
        // Drawer를 가운데로 위치할 수 있도록 도와줌. resize는 이후 업데이트 예정
        PaperProps={{
          sx: {
            maxWidth: "400px",
            marginX:
              drawerWidth === 400 ? `calc((100% - ${drawerWidth}px)/2)` : null,
          },
        }}
      >
        {/* 이 부분을 범용적으로 사용할 수 있게 만드는 건 어떨까? */}
        <ScheduleDrawer
          setDrawerWidth={setDrawerWidth}
          handleClose={() => setBottomDrawerOpen(false)}
          data={selectedSchedule as Schedule}
          mode={SCHEDULE_DRAWER_MODE.modify}
        />
      </Drawer>
    </>
  );
}

export default SearchSchedule;
