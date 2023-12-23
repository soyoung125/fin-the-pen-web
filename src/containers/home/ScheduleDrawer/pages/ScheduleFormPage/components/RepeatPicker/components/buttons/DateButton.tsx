import { Button } from "@mui/material";

export interface DateButtonProps {
  value: string | number;
  handleClick: () => void;
  isSelected: boolean;
}

function DateButton({ value, handleClick, isSelected }: DateButtonProps) {
  return (
    <Button
      onClick={handleClick}
      variant={isSelected ? "contained" : "outlined"}
      color={isSelected ? "primary" : "secondary"}
      sx={{
        minWidth: "36px",
        height: "36px",
        p: 0,
        borderRadius: "12px",
      }}
    >
      {value}
    </Button>
  );
}

export default DateButton;
