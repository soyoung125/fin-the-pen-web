import { Stack } from "@mui/material";
import TimeOption from "./TimeOption";

function SelectTime() {
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
        <TimeOption timeOption={["오전", "오후"]} />
        <TimeOption timeOption={Array.from({ length: 12 }, (_, i) => i + 1)} />
        <TimeOption timeOption={Array.from({ length: 60 }, (_, i) => i + 1)} />
      </Stack>
    </div>
  );
}

export default SelectTime;
