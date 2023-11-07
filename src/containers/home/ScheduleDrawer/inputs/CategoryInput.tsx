import { Autocomplete, TextField, InputAdornment, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CATEGORIES, Category } from "../../../../constants/categories";
import { SCHEDULE_DRAWER } from "../../../../constants/schedule";
import { selectSchedule } from "../../../../app/redux/slices/scheduleSlice";
import { getType, updateSchedule } from "../domain/schedule";
import { useAppDispatch } from "../../../../app/redux/hooks";

export default function CategoryInput({ selected }: { selected: string }) {
  const dispatch = useAppDispatch();
  const schedule = useSelector(selectSchedule);

  const [value, setValue] = useState<string | null>(selected);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (value) {
      const category = CATEGORIES.filter((cat) => cat.title === value);
      if (category.length > 0) {
        updateSchedule(dispatch, schedule, {
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
    if (schedule?.type !== type) {
      updateSchedule(dispatch, schedule, {
        target: {
          id: "type",
          value: type,
        },
      });
    }
  };

  return (
    <div>
      <Autocomplete
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
