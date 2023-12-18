import { Autocomplete, Box, InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  CATEGORIES,
  Category,
} from "../../../../../../constants/categories.tsx";
import { SCHEDULE_DRAWER } from "../../../../../../constants/schedule.tsx";
import { selectSchedule } from "@redux/slices/scheduleSlice.tsx";
import { useAppDispatch } from "@redux/hooks.ts";
import {
  getType,
  useScheduleForm,
} from "@containers/home/ScheduleDrawer/hooks/useScheduleForm.ts";

interface CategoryInputProps {
  selected: string;
  showError: boolean;
}

export default function CategoryInput({
  selected,
  showError,
}: CategoryInputProps) {
  const dispatch = useAppDispatch();
  const schedule = useSelector(selectSchedule);
  const { updateSchedule } = useScheduleForm();

  const [value, setValue] = useState<string | null>(selected);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (value) {
      const category = CATEGORIES.filter((cat) => cat.title === value);
      if (category.length > 0) {
        updateSchedule({
          target: {
            id: "category",
            value: category[0].title,
          },
        });
        changeType(category[0]);
      }
    }
  }, [value]);

  const changeType = (category: Category) => {
    const type = getType(category);
    if (schedule?.price_type !== type) {
      updateSchedule({
        target: {
          id: "price_type",
          value: type,
        },
      });
    }
  };

  return (
    <div>
      <Autocomplete
        sx={{ px: 2.5 }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="category"
        options={[""].concat(CATEGORIES.map((cat) => cat.title))}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            error={showError && schedule?.category === ""}
            helperText={
              showError && schedule?.category === ""
                ? "필수 입력 값입니다!"
                : ""
            }
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <Box sx={{ color: "primary.main", fontWeight: 500 }}>
                    {SCHEDULE_DRAWER.category_title}
                  </Box>
                </InputAdornment>
              ),
            }}
            inputProps={{
              ...params.inputProps,
              style: { textAlign: "right" },
            }}
          />
        )}
      />
    </div>
  );
}
