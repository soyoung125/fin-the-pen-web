import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Keypad from "@containers/sign/Keypad.tsx";

interface SelectTimeProps {
  setValue: Dispatch<SetStateAction<string>>;
}

function SelectTime({ setValue }: SelectTimeProps) {
  const MAX_LENGTH = 4;
  const [time, setTime] = useState<number[]>([]);

  const formatTime = (arr: number[]) => {
    const time: (number | "_" | ":")[] = [...arr];
    while (time.length < 4) {
      time.push("_");
    }

    return "" + time[0] + time[1] + ":" + time[2] + time[3];
  };

  useEffect(() => {
    if (time.length === MAX_LENGTH) {
      const [hour, minute] = formatTime(time).split(":");
      setValue(`${hour}:${minute}`);
    } else {
      setValue("");
    }
  }, [time]);

  return (
    <>
      <div>{formatTime(time)}</div>
      <Keypad
        setPassword={setTime}
        currentLength={time.length}
        maxLength={MAX_LENGTH}
      />
    </>
  );
}

export default SelectTime;
