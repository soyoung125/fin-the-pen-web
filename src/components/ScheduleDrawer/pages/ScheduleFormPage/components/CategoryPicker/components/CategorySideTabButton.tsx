import { MouseEventHandler } from "react";
import { Button, Stack, Typography } from "@mui/material";

export interface CategorySideTabProps {
  isSelected: boolean;
  tab: string;
  categoryCount: number;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function CategorySideTabButton({
  isSelected,
  tab,
  categoryCount,
  onClick,
}: CategorySideTabProps) {
  return (
    <Button
      sx={{
        borderBottom: "1px solid #E0E0E0",
        borderRadius: 0,
        backgroundColor: isSelected ? "rgba(115, 91, 242, 0.15)" : "#F7F7F8",
        p: 0,
      }}
      fullWidth
      onClick={onClick}
    >
      <Stack
        py={2}
        px={2.5}
        color={isSelected ? "black" : "#8C919C"}
        justifyContent="space-between"
        direction="row"
        sx={{ width: "100%" }}
      >
        <Typography>
          {tab}({categoryCount})
        </Typography>
      </Stack>
    </Button>
  );
}

export default CategorySideTabButton;
