import moment from "moment";
import TodayButton from "@components/common/TodayButton/TodayButton.tsx";

export interface MoveTodayProps {
  date: string;
  value: number;
  changeToToday: () => void;
}

function MoveToday({ date, value, changeToToday }: MoveTodayProps) {
  const today = moment();

  switch (value) {
    case 0:
      if (!today.isSame(date, "month")) {
        return <TodayButton goToday={changeToToday} type="month" />;
      }
      break;
    case 1:
      if (!today.isSame(date, "month")) {
        return <TodayButton goToday={changeToToday} type="week" />;
      }
      break;
    case 2:
      if (!today.isSame(date, "day")) {
        return <TodayButton goToday={changeToToday} type="day" />;
      }
      break;
  }
}

export default MoveToday;
