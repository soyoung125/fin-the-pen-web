import { Stack } from "@mui/material";
import TimeOption from "./TimeOption";
import moment from "moment";
import { Dispatch, SetStateAction } from "react";

interface SelectDateProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export type HHMMType = `${number}:${number}`; // 이후 이 타입을 다른 곳에서도 사용할 수 있도록 제네릭 도입 예정
export type ChangeTimeType = "meridiem" | "hour" | "minute";

function SelectTime({ value, setValue }: SelectDateProps) {
  const [hour, minute] = value.split(":") ?? [];
  const aa = Number(hour) < 12 ? 0 : 1;
  const meridiem = aa === 0 ? 0 : 12;

  const changeTime = (timeType: ChangeTimeType, select: number) => {
    const h = Number(hour);
    const newTime = moment(value, "hh:mm");

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

    setValue(newTime.format("HH:mm") as HHMMType);
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
