import { Box, FormControl, InputAdornment, TextField } from "@mui/material";
import { MouseEventHandler } from "react";
import { SCHEDULE_DRAWER } from "@constants/schedule.ts";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";

interface CategoryInputProps {
  selectedCategory: string;
  showError: boolean;
  onClick: MouseEventHandler<HTMLElement>;
}

export default function CategoryInput({
  selectedCategory,
  showError,
  onClick,
}: CategoryInputProps) {
  return (
    <FormControl fullWidth onClick={onClick}>
      <TextField
        sx={{
          px: 2.5,
          ".MuiInputBase-root.MuiInput-root:before": {
            borderBottomColor: "#F7F7F8",
          },
        }}
        value={selectedCategory}
        variant="standard"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Box sx={{ color: "primary.main", fontWeight: 500 }}>
                {SCHEDULE_DRAWER.category_title}
              </Box>
            </InputAdornment>
          ),
          endAdornment: <ArrowForwardIos sx={{ fontSize: "16px" }} />,
        }}
        inputProps={{
          style: { textAlign: "right", padding: "12px 0px" },
        }}
      />
    </FormControl>
  );
}
