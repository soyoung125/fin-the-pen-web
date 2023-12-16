import { Button, Stack, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { MouseEventHandler } from "react";

export interface CategoryButtonProps {
  selected: boolean;
  category: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function CategoryButton({ category, selected, onClick }: CategoryButtonProps) {
  return (
    <Button
      sx={{
        borderTop: "1px solid #E0E0E0",
        borderBottom: "1px solid #E0E0E0",
        borderRadius: 0,
      }}
      fullWidth
      onClick={onClick}
    >
      <Stack
        p="16px"
        color={selected ? "black" : "#8C919C"}
        justifyContent="space-between"
        direction="row"
        sx={{ width: "100%" }}
      >
        <Typography>{category}</Typography>
        {selected ? (
          <CheckCircleIcon sx={{ color: "#735BF2" }} />
        ) : (
          <CheckCircleOutlineIcon />
        )}
      </Stack>
    </Button>
  );
}

export default CategoryButton;
