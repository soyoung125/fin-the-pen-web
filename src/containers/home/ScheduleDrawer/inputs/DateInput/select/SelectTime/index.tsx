import { Stack } from "@mui/material";
import TimeOption from "./TimeOption";
import { UpdateStateInterface } from "@type/common";

interface SelectDateProps {
  time: string | undefined;
  changeSchedule: (
    state:
      | React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      | UpdateStateInterface,
  ) => void;
  type: string;
}

function SelectTime({ time, changeSchedule, type }: SelectDateProps) {
  const [hour, minute] = time?.split(":") ?? [];
  const aa = Number(hour) < 12 ? 0 : 1;
  const newHour = aa === 0 ? 0 : 12;
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
        <TimeOption timeOption={["오전", "오후"]} selected={aa} />
        <TimeOption
          timeOption={Array.from({ length: 12 }, (_, i) => i + 1)}
          selected={Number(hour) - newHour - 1}
        />
        <TimeOption
          timeOption={Array.from({ length: 60 }, (_, i) => i)}
          selected={Number(minute)}
        />
      </Stack>
    </div>
  );
}

export default SelectTime;
