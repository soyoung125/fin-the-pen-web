import { Button } from "@mui/material";

export interface OptionButtonProps {
  isSelected: boolean;
  id?: string;
  value: string;
  contents: string;
  handleClick: (e: React.MouseEvent) => void;
}

function OptionButton({
  isSelected,
  id,
  value,
  contents,
  handleClick,
}: OptionButtonProps) {
  return (
    <Button
      fullWidth
      id={id}
      value={value}
      variant={isSelected ? "contained" : "outlined"}
      color={isSelected ? "primary" : "secondary"}
      sx={{ borderRadius: "20px" }}
      onClick={handleClick}
    >
      {contents}
    </Button>
  );
}

export default OptionButton;
