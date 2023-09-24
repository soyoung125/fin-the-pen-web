import Checkbox from "@mui/material/Checkbox";
import { Box, Chip, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  selectFiltered,
  updateFilter,
  updateFiltersForce,
} from "../../../../../../../app/redux/slices/scheduleSlice";
import { NestedCategory } from "../../../../../../../constants/categories";
import { useAppDispatch } from "../../../../../../../app/redux/hooks";

interface FilterChipsProps {
  nested: NestedCategory;
}

function FilterChips({ nested }: FilterChipsProps) {
  const dispatch = useAppDispatch();
  const filtered = useSelector(selectFiltered);
  const [checked, setChecked] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    setCategories(nested.categories);
  }, [nested]);

  useEffect(() => {
    /**
     * 이 타입의 모든 태그가 해제된 경우, 체크를 자동으로 해제 처리
     */
    let matches = 0;
    categories.forEach((cat) => {
      if (filtered.includes(cat)) {
        matches += 1;
      }
    });
    if (matches === categories.length) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  }, [categories, filtered]);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    dispatch(updateFilter(target.innerText));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    dispatch(
      updateFiltersForce({
        mode: checked ? "write" : "remove", // ts 적용 필요
        categories,
      })
    );
  };

  const isFiltered = (cat: string): boolean =>
    filtered.findIndex((word) => word === cat) === -1;

  return (
    <Box key={nested.type} mx={1}>
      <Stack direction="row" alignItems="center">
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        <Typography>{nested.type}</Typography>
      </Stack>
      {nested.categories.map((cat) => (
        <Chip
          key={cat}
          label={cat}
          variant={isFiltered(cat) ? "outlined" : "filled"} // outlined에서 filled로 바꿨는데 TS 오류로 추정중
          onClick={handleClick}
          sx={{
            mr: 1,
            mb: 1,
            color: isFiltered(cat) ? nested.color : "white",
          }}
        />
      ))}
    </Box>
  );
}
export default FilterChips;
