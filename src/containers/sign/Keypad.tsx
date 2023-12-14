import { Dispatch, SetStateAction } from "react";
import { Box, Button } from "@mui/material";

interface KeypadProps {
  isRandom?: boolean;
  setPassword: Dispatch<SetStateAction<number[]>>;
  currentLength: number;
  maxLength: number;
}

function Keypad({
  isRandom,
  setPassword,
  currentLength,
  maxLength,
}: KeypadProps) {
  const initialNumbers = [...Array(10)].map((_, index) => index);
  const numbers: (number | "clear" | "delete")[] = isRandom
    ? [...initialNumbers].sort(() => Math.random() - 0.5)
    : [...initialNumbers.slice(1), 0];
  numbers.splice(10 - 1, 0, "clear");
  numbers.splice(10 + 1, 0, "delete");

  const handleClickNumberButton = (number: number) => {
    if (maxLength !== currentLength) {
      setPassword((prevNumbers) => [...prevNumbers, number]);
    }
  };

  const handleClickDeleteButton = () => {
    if (currentLength !== 0) {
      setPassword((prevNumbers) =>
        prevNumbers.slice(0, prevNumbers.length - 1)
      );
    }
  };

  const handleClickClearButton = () => {
    if (currentLength !== 0) {
      setPassword([]);
    }
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(4, 100px)",
      }}
    >
      {numbers.map((value) => (
        <Button
          key={value}
          className="item"
          onClick={() => {
            if (typeof value === "number") {
              handleClickNumberButton(value);
            } else if (value === "clear") {
              handleClickClearButton();
            } else if (value === "delete") {
              handleClickDeleteButton();
            }
          }}
          sx={{
            fontSize: "1.2rem",
          }}
        >
          {value}
        </Button>
      ))}
    </Box>
  );
}

export default Keypad;
