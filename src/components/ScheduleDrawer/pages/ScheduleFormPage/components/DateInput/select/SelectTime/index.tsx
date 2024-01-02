import { Stack } from "@mui/material";
import TimeOption from "./TimeOption.tsx";
import { UpdateStateInterface } from "@app/types/common.ts";
import moment from "moment";
import { InputDateTimeType } from "../../InputDateTime.tsx";

interface SelectDateProps {
  time: string | undefined;
  changeSchedule: (
    state:
      | React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      | UpdateStateInterface
  ) => void;
  type: InputDateTimeType;
}

function SelectTime({ time, changeSchedule, type }: SelectDateProps) {
  const [hour, minute] = time?.split(":") ?? [];
  const aa = Number(hour) < 12 ? 0 : 1;
  const meridiem = aa === 0 ? 0 : 12;

  const changeTime = (timeType: string, select: number) => {
    const h = Number(hour);
    const newTime = moment(time, "hh:mm");

    switch (timeType) {
      case "meridiem":
        if (select === 0) {
          if (h === 12) newTime.set("hour", 0);
          else if (h > 12) newTime.set("hour", h - 12);
        } else {
          if (h === 0) newTime.set("hour", 12);
          if (h < 12) newTime.set("hour", h + 12);
        }
        break;
      case "hour":
        if (aa === 0) {
          if (select === 11) newTime.set("hour", 0);
          else newTime.set("hour", select + 1);
        } else {
          if (select === 11) newTime.set("hour", 12);
          else newTime.set("hour", select + 13);
        }
        break;
      case "minute":
        newTime.set("minute", select);
        break;
    }

    changeSchedule({
      target: {
        id: type + "_time",
        value: newTime.format("HH:mm"),
      },
    });
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: "92px",
          height: "30px",
          width: "100%",
          borderTop: "1px solid",
          borderBottom: "1px solid",
          zIndex: 100,
        }}
      />
      <Stack direction="row" justifyContent="space-evenly">
        <TimeOption
          timeOption={["오전", "오후"]}
          selected={aa}
          type="meridiem"
          changeTime={changeTime}
        />
        <TimeOption
          timeOption={Array.from({ length: 12 }, (_, i) => i + 1)}
          selected={Number(hour) - meridiem - 1}
          type="hour"
          changeTime={changeTime}
        />
        <TimeOption
          timeOption={Array.from({ length: 60 }, (_, i) => i)}
          selected={Number(minute)}
          type="minute"
          changeTime={changeTime}
        />
      </Stack>
    </div>
  );
}

export default SelectTime;
