import { Button } from "@mui/material";

export interface OptionButtonProps {
  isSelected: boolean;
  id?: string;
  contents: string;
  handleClick: (e: React.MouseEvent) => void;
}

function OptionButton({
  isSelected,
  id,
  contents,
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
      {contents}
    </Button>
  );
}

export default OptionButton;
