import { Button } from "@mui/material";

export interface OptionButtonProps {
  isSelected: boolean;
  id?: string;
  value: string;
  handleClick: (e: React.MouseEvent) => void;
}

function OptionButton({
  isSelected,
  id,
  value,
  handleClick,
}: OptionButtonProps) {
  return (
    <Button
      fullWidth
      id={id}
      variant={isSelected ? "contained" : "outlined"}
      color={isSelected ? "primary" : "secondary"}
      sx={{ borderRadius: "20px" }}
      onClick={handleClick}
    >
      {value}
    </Button>
  );
}

export default OptionButton;
