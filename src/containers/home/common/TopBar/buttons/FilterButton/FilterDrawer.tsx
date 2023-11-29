import {
  Button,
  Divider,
  Drawer,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import RoundedButton from "@components/common/RoundedButton.tsx";
import DialogContext from "@components/layouts/dialog/DialogContext.tsx";
import FilterHeader from "@containers/home/common/TopBar/buttons/FilterButton/FilterHeader.tsx";
import { categories } from "@containers/home/common/TopBar/buttons/FilterButton/constants/categories.ts";
import { useSelectCategory } from "@containers/home/common/TopBar/buttons/FilterButton/hooks/useSelectCategory.ts";
import { useSelectDate } from "@containers/home/common/TopBar/buttons/FilterButton/hooks/useSelectDate.ts";

interface FilterDrawerProps {
  bottomDrawerOpen: boolean;
  setBottomDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function FilterDrawer({
  bottomDrawerOpen,
  setBottomDrawerOpen,
}: FilterDrawerProps) {
  const { dialog } = useContext(DialogContext);
  const { onClickCheckFilterButton, isSubCategorySelected, switchSubCategory } =
    useSelectCategory();

  const { setDate, date } = useSelectDate();

  const onClickSaveFilter = async () => {
    const answer = await dialog({
      title: "알림",
      content: "저장하시겠습니까?",
    });

    console.log(answer);
  };

  return (
    <>
      <Drawer
        open={bottomDrawerOpen}
        anchor="bottom"
        onClose={() => setBottomDrawerOpen(false)}
      >
        <Stack gap={1} direction="row" px="20px" py="12px" alignItems="center">
          <RoundedButton
            value="arrow-back-ios-icon"
            onClick={() => setBottomDrawerOpen(false)}
          >
            <ArrowBackIosIcon />
          </RoundedButton>

          <Typography variant="h4">카테고리 필터 설정</Typography>
        </Stack>

        <Divider />
        <FilterHeader title="날짜" />

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
          px="20px"
          py="4px"
          gap="8px"
        >
          <Button variant="contained" fullWidth size="small">
            1년
          </Button>
          <Button variant="outlined" fullWidth size="small">
            6개월
          </Button>
          <Button variant="outlined" fullWidth size="small">
            1개월
          </Button>
          <Button variant="outlined" fullWidth size="small">
            1주일
          </Button>
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{ width: "100%" }}
          px="20px"
          py="4px"
        >
          <TextField
            id="start"
            // label="시작일"
            type="date"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            // value={filteredDate.start}
            // onChange={changeSchedule}
            size="small"
          />
          <Typography>-</Typography>
          <TextField
            id="end"
            // label="종료일"
            type="date"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            // value={filteredDate.end}
            // onChange={changeSchedule}
            size="small"
          />
        </Stack>

        {categories.map((category) => {
          return (
            <>
              <FilterHeader
                title={category.type}
                isCheckAll={true}
                onClickCheckAll={() => switchSubCategory(category.type)}
              />
              <Stack
                flexWrap="wrap"
                alignSelf="stretch"
                alignContent="flex-start"
                direction="row"
                py="12px"
                px="20px"
                gap="8px"
              >
                {category.subCategories.map((subCategory) => (
                  <Button
                    variant={
                      isSubCategorySelected(category.type, subCategory)
                        ? "contained"
                        : "outlined"
                    }
                    size="small"
                    sx={{ borderRadius: "18px" }}
                    onClick={() =>
                      onClickCheckFilterButton(category.type, subCategory)
                    }
                  >
                    {subCategory}
                  </Button>
                ))}
              </Stack>
            </>
          );
        })}

        <Divider />

        <Stack justifyContent="space-between" spacing={2} m={1} pt={5} pb={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onClickSaveFilter()}
          >
            저장
          </Button>
        </Stack>
      </Drawer>
    </>
  );
}
export default FilterDrawer;
