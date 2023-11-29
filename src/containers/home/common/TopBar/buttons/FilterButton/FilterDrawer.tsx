import { Button, Divider, Drawer, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import RoundedButton from "@components/common/RoundedButton.tsx";
import DialogContext from "@components/layouts/dialog/DialogContext.tsx";
import FilterHeader from "@containers/home/common/TopBar/buttons/FilterButton/FilterHeader.tsx";
import { categories } from "@containers/home/common/TopBar/buttons/FilterButton/constants/categories.ts";
import { useSelectCategory } from "@containers/home/common/TopBar/buttons/FilterButton/hooks/useSelectCategory.ts";

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
        <FilterHeader
          title="날짜"
          isCheckAll={true}
          onClickCheckAll={() => {}}
        />
        <div>날짜 선택기</div>

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
