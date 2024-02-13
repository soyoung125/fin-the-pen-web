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
        borderBottom: "1px solid #E0E0E0",
        borderRadius: 0,
        p: 0,
      }}
      fullWidth
      onClick={onClick}
    >
      <Stack
        py={2}
        color={selected ? "black" : "#8C919C"}
        justifyContent="space-between"
        direction="row"
        sx={{ width: "100%", paddingLeft: "16px", paddingRight: "20px" }}
      >
        <Typography>{category}</Typography>
        {selected ? (
          <CheckCircleIcon sx={{ color: "#735BF2" }} />
        ) : (
          <CheckCircleOutlineIcon sx={{ color: "#C8CBD0" }} />
        )}
      </Stack>
    </Button>
  );
}

export default CategoryButton;
