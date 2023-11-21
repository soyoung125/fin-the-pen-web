/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import { Box } from "@mui/material";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import {
  PickersDay,
  PickersDayProps,
} from "@mui/x-date-pickers/PickersDay/PickersDay";
import moment from "moment";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { grey, lightBlue, pink } from "@mui/material/colors";
import { CATEGORIES } from "../../../../../constants/categories";
import {
  selectDate,
  selectViewMode,
  setSelectedDate,
} from "../../../../../app/redux/slices/scheduleSlice";
import MarkedPickersDay from "./boxes/scheduleMarker/MarkedPickersDay";
import MarkerStack from "./boxes/scheduleMarker/ScheduleCount";
import "moment/locale/ko";
import CalenderBox from "./boxes/CalenderBox";
import IncomeExpenditureBox from "./boxes/IncomeExpenditureBox";
import { calculateIncomeExpenditure } from "@utils/tools.ts";
import { makeMarkerData } from "./domain/calender";
import WeeklyStatement from "./boxes/WeeklyStatement";
import { selectIsDarkMode } from "../../../../../app/redux/slices/settingSlice";
import useSchedule from "../../../../../hooks/useSchedule";
import { Schedule } from "../../../../../types/schedule";
import { useAppDispatch } from "../../../../../app/redux/hooks";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import ScheduleCount from "./boxes/scheduleMarker/ScheduleCount";

interface CalenderProps {
  dateHeight: number;
}

function Calender({ dateHeight }: CalenderProps) {
  const dispatch = useAppDispatch();
  const value = useSelector(selectDate);
  const { schedules } = useSchedule();
  const viewMode = useSelector(selectViewMode);
  const today = moment(new Date());
  const isDarkMode = useSelector(selectIsDarkMode);

  const DATE_SIZE = 25;
  const DATE_HEIGHT = dateHeight;

  useEffect(() => {
    dispatch(setSelectedDate(moment(new Date())));
  }, []);

  const renderDayInPicker = (props: PickersDayProps<moment.Moment>) => {
    const { day, ...other } = props;
    // 오늘이 이달에 해당하지 않을 때 마커가 표시되지 않도록 하는 코드
    if (!day.isSame(value, "month")) {
      return <PickersDay {...props} />;
    }
    const daySchedules = schedules
      .filter(
        (e) =>
          day.isSameOrAfter(e.start_date) && day.isSameOrBefore(e.end_date),
      )
      .map((s) => ({
        ...s,
        category: CATEGORIES.find((c) => c.title === s.category) || {
          type: "미분류",
          color: "#C8A2C8",
          nestedType: "미분류",
          title: "미분류",
        },
      }));

    const fixedWithdrawal = daySchedules.filter((s) =>
      ["고정 입출금", "미분류"].includes(s.category.type),
    );
    const nonFixedWithdrwal = daySchedules.filter(
      (s) => s.category.type !== "고정 입출금",
    );

    if (fixedWithdrawal.length > 0) {
      const borderColor = Array.from(
        new Set(fixedWithdrawal.map((f) => f.category.color)),
      ).sort((a, b) => (a > b ? 1 : -1));
      if (nonFixedWithdrwal.length > 0) {
        return (
          <Box sx={{ width: "calc(100vw / 7)" }} key={other.key}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <MarkedPickersDay color={borderColor} props={props} />
            </Box>
            <ScheduleCount count={daySchedules.length} />
          </Box>
        );
      }
      return (
        <MarkedPickersDay color={borderColor} props={props} key={other.key} />
      );
    }

    if (nonFixedWithdrwal.length > 0) {
      return (
        <Box sx={{ width: "calc(100vw / 7)" }} key={other.key}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <PickersDay {...props} />
          </Box>
          <ScheduleCount count={daySchedules.length} />
        </Box>
      );
    }

    return <PickersDay {...props} />;
  };

  // 실제 지출 데이터를 불러오기 전이기 때문에 일정 데이터의 지출 데이터 사용중
  // 자산 탭 사라짐 (일주일 일정에 사용 예정)
  // const renderAssetDayPicker = (props: PickersDayProps<moment.Moment>) => {
  //   const { day, ...other } = props;
  //   const weekday = day.format("dd");
  //   const isSameOrBefore = day.isSameOrBefore(today);

  //   // 오늘이 이달의 마지막 주에 해당하고 후달이 일요일로 시작하지 않은 경우 회색바가 그려지는 문제를 해결하기 위한 코드
  //   if (!day.isSame(value, "month") && today.isBefore(value)) {
  //     return <PickersDay {...props} />;
  //   }

  //   // 오늘 이전의 일별 수입/지출, 주별 수입/지출을 표시하기 위한 조건문
  //   if (isSameOrBefore && weekday === "일") {
  //     const income = !day.isSame(value, "month")
  //       ? "0"
  //       : calculateIncomeExpenditure(
  //           schedules,
  //           (s: Schedule) => day.isSame(s.date, "day"),
  //           "+",
  //         );
  //     const expenditure = !day.isSame(value, "month")
  //       ? "0"
  //       : calculateIncomeExpenditure(
  //           schedules,
  //           (s: Schedule) => day.isSame(s.date, "day"),
  //           "-",
  //         );

  //     return (
  //       <IncomeExpenditureBox
  //         key={props.key}
  //         income={income}
  //         expenditure={expenditure}
  //         incomeColor={pink[100]}
  //         expenditureColor={lightBlue[200]}
  //         pickersDay={<PickersDay {...props} />}
  //       >
  //         {day.isSame(today, "week") ? (
  //           // 이번주의 주별 수입/지출 표시
  //           <Box
  //             sx={{
  //               width: `calc(100vw / 7 * (${today.diff(day, "days")} + 1))`,
  //             }}
  //           >
  //             <WeeklyStatement
  //               expenditure={calculateIncomeExpenditure(
  //                 schedules,
  //                 (s: Schedule) =>
  //                   day.isSameOrBefore(s.date) && day.isSame(s.date, "week"),
  //                 "-",
  //               )}
  //               income={calculateIncomeExpenditure(
  //                 schedules,
  //                 (s: Schedule) =>
  //                   day.isSameOrBefore(s.date) && day.isSame(s.date, "week"),
  //                 "+",
  //               )}
  //             />
  //           </Box>
  //         ) : (
  //           // 지난주들의 주별 수입/지출 표시
  //           <Box
  //             sx={{
  //               width: "100vw",
  //             }}
  //           >
  //             <WeeklyStatement
  //               expenditure={calculateIncomeExpenditure(
  //                 schedules,
  //                 (s: Schedule) => day.isSame(s.date, "week"),
  //                 "-",
  //               )}
  //               income={calculateIncomeExpenditure(
  //                 schedules,
  //                 (s: Schedule) => day.isSame(s.date, "week"),
  //                 "+",
  //               )}
  //             />
  //           </Box>
  //         )}
  //       </IncomeExpenditureBox>
  //     );
  //   }

  //   // 뒷날의 일별 수입/지출액 표시
  //   return (
  //     <IncomeExpenditureBox
  //       key={props.key}
  //       income={calculateIncomeExpenditure(
  //         schedules,
  //         (s: Schedule) => day.isSame(s.date, "day"),
  //         "+",
  //       )}
  //       expenditure={calculateIncomeExpenditure(
  //         schedules,
  //         (s: Schedule) => day.isSame(s.date, "day"),
  //         "-",
  //       )}
  //       incomeColor={isSameOrBefore ? pink[100] : grey[500]}
  //       expenditureColor={isSameOrBefore ? lightBlue[200] : grey[500]}
  //       pickersDay={<PickersDay {...props} />}
  //     />
  //   );
  // };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <CalenderBox
        dateHeight={DATE_HEIGHT}
        dateSize={DATE_SIZE}
        // 달력 높이 계산을 위한 해당 월의 주수 계산
        week={
          moment(value).endOf("month").week() -
          moment(value).startOf("month").week() +
          1
        }
      >
        <DateCalendar
          views={["year", "month", "day"]}
          disableHighlightToday
          dayOfWeekFormatter={(day) => day.substring(0, 3)}
          value={moment(value)}
          onChange={(newValue) => {
            dispatch(setSelectedDate(newValue));
          }}
          onMonthChange={(month) => {
            dispatch(setSelectedDate(month));
          }}
          slots={{
            day: renderDayInPicker,
          }}
          reduceAnimations
        />
      </CalenderBox>
    </LocalizationProvider>
  );
}

export default Calender;
