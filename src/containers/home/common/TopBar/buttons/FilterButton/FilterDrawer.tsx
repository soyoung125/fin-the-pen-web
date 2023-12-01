import { Button, Divider, Drawer, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import RoundedButton from "@components/common/RoundedButton.tsx";
import DialogContext from "@components/layouts/dialog/DialogContext.tsx";
import FilterHeader from "@containers/home/common/TopBar/buttons/FilterButton/FilterHeader.tsx";
import { categories } from "@containers/home/common/TopBar/buttons/FilterButton/constants/categories.ts";
import { useSelectCategory } from "@containers/home/common/TopBar/buttons/FilterButton/hooks/useSelectCategory.ts";
import { useSelectDate } from "@containers/home/common/TopBar/buttons/FilterButton/hooks/useSelectDate.ts";
import FilterLayout from "@containers/home/common/TopBar/buttons/FilterButton/FilterLayout.tsx";
import DateInput from "@containers/home/common/TopBar/buttons/FilterButton/DateInput.tsx";

interface FilterDrawerProps {
  bottomDrawerOpen: boolean;
  setBottomDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function FilterDrawer({
  bottomDrawerOpen,
  setBottomDrawerOpen,
}: FilterDrawerProps) {
  const { dialog } = useContext(DialogContext);
  const {
    selectedCategories,
    onClickCheckFilterButton,
    isSubCategorySelected,
    isAllSubCategoriesSelected,
    switchSubCategory,
  } = useSelectCategory();

  const { date, error: dateError, updateDate } = useSelectDate();

  const onClickSaveFilter = async () => {
    const answer = await dialog({
      title: "알림",
      content: "저장하시겠습니까?",
    });

    if (answer) {
      console.log(JSON.stringify(selectedCategories));
    }
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
        <Typography mx="20px" my="8px" variant="caption">
          선택한 카테고리의 소비내역만 보여집니다.
        </Typography>

        <FilterHeader title="날짜" />
        <FilterLayout>
          <Stack direction="row" alignItems="center" sx={{ width: "100%" }}>
            <DateInput
              date={date.startDate}
              dateType="startDate"
              updateDate={updateDate}
            />
            <Typography mx={1}>-</Typography>
            <DateInput
              date={date.endDate}
              dateType="endDate"
              updateDate={updateDate}
            />
          </Stack>
          <Typography variant="caption" color="error">
            {dateError}
          </Typography>
        </FilterLayout>

        {categories.map((category) => {
          return (
            <>
              <FilterHeader
                title={category.type}
                isCheckAll={isAllSubCategoriesSelected(category.type)}
                onClickCheckAll={() => switchSubCategory(category.type)}
              />
              <FilterLayout>
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
              </FilterLayout>
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
