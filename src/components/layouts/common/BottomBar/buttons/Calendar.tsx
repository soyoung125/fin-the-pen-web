import calendar_primary from "@assets/icons/bottom/calendar_primary.svg";
import calendar_secondary from "@assets/icons/bottom/calendar_secondary.svg";
import { ButtonIcon } from "@components/layouts/common/BottomBar/buttons/types.ts";

function CalendarIcon({ selected }: ButtonIcon) {
  if (selected) return <img src={calendar_primary} alt="calendar_primary" />;

  return <img src={calendar_secondary} alt="calendar_secondary" />;
}

export default CalendarIcon;
