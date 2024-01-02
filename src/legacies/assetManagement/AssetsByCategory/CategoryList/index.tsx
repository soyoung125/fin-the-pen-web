import {
  Box,
  Button,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  Stack,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CategoryTypeBadge from "../../../../components/common/CategoryTypeBadge";
import { selectAssetsByCategory } from "../../../../app/redux/slices/assetSlice";
import {
  AssetCategories,
  AssetsByCategoryInterface,
} from "@app/types/common.ts";
import AssetInput from "./AssetInput";
import AlertModal from "../../../../components/common/AlertModal";
import useModal from "@hooks/useModal.ts";
import { useAppDispatch } from "../../../../app/redux/hooks";

interface CategoryListProps {
  handleClick: (type: string) => void;
  open: string;
  updateCategoryAssets: (newData: AssetsByCategoryInterface[]) => void;
}

function CategoryList({
  handleClick,
  open,
  updateCategoryAssets,
}: CategoryListProps) {
  const dispatch = useAppDispatch();
  const assets = useSelector(selectAssetsByCategory);
  const {
    modalOpen: modifyModalOpen,
    openModal: openModifyModal,
    closeModal: closeModifyModal,
  } = useModal();

  const [newAssets, setNewAssets] = useState(assets);
  const [selectedCategory, setSelectedCategory] = useState<"" | number>("");
  const [asset, setAsset] = useState("0");

  useEffect(() => {
    setNewAssets(assets);
  }, [assets]);

  const handleCategoryAssets = () => {
    closeModifyModal();
    setSelectedCategory("");
    updateCategoryAssets(newAssets);
  };

  const modifyCategoryAsset = (type: string, value: number) => {
    const data = newAssets.map((category: AssetsByCategoryInterface) =>
      category.type === type
        ? {
            ...category,
            total:
              category.total === "-" && value === 0 ? ("-" as const) : value,
          }
        : category
    );
    setNewAssets(data);
  };

  const modifySubcategoryAsset = (
    type: string,
    title: string,
    summary: number,
    value: number
  ) => {
    const data = newAssets.map((category: AssetsByCategoryInterface) =>
      category.type === type
        ? {
            ...category,
            categories: category.categories.map((c: AssetCategories) =>
              c.title === title ? { ...c, asset: value } : c
            ),
            sum: summary,
          }
        : category
    );
    setNewAssets(data);
  };

  const modifySubcategory = (
    category: AssetsByCategoryInterface,
    title: string,
    preValue: string | number
  ) => {
    let sum = 0;
    const total = category.total === "-" ? 0 : category.total;
    if (asset === "") {
      sum = category.sum - (preValue === "-" ? 0 : +preValue);
      modifySubcategoryAsset(category.type, title, sum, 0);
    } else if (asset !== "-") {
      sum =
        category.sum - (preValue === "-" ? 0 : +preValue) + parseInt(asset, 10);
      if (category.total !== "-" && sum > +total) {
        alert("합계가 설정한 카테고리 지출 목표 금액을 넘었습니다.");
        return;
      }
      modifySubcategoryAsset(category.type, title, sum, parseInt(asset, 10));
    }
    setSelectedCategory(+selectedCategory + 1);
  };

  const modifyCategory = () => {
    modifyCategoryAsset(open, asset === "" ? 0 : parseInt(asset, 10));
    setSelectedCategory(0);
  };

  const clickCategory = (category: string) => {
    handleClick(category);
    setSelectedCategory("");
  };

  return (
    <>
      <List>
        {newAssets.map((category: AssetsByCategoryInterface) => (
          <Box key={category.type}>
            <ListItemButton
              sx={{ px: 0 }}
              onClick={() => clickCategory(category.type)}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ width: "100%" }}
              >
                <Stack direction="row">
                  <CategoryTypeBadge color={category.color} mr={0.5} />
                  {category.type}
                </Stack>
                {open === category.type && selectedCategory === "" ? (
                  <AssetInput
                    handleChange={(e) =>
                      setAsset(e.target.value.replaceAll(",", ""))
                    }
                    handleFocus={() =>
                      setAsset(
                        category.total === "-" ? "" : category.total.toString()
                      )
                    }
                    asset={asset}
                    modifyFunction={() => modifyCategory()}
                  />
                ) : (
                  <Box
                    sx={{ color: category.total === "-" ? "#979797" : "black" }}
                  >
                    {category.total === "-"
                      ? `${category.total}원`
                      : `${category.total.toLocaleString("kr-KO")}원`}
                  </Box>
                )}
              </Stack>
            </ListItemButton>

            <Collapse in={open === category.type} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {category.categories.map((c, index) => (
                  <ListItem sx={{ py: 0 }} key={c.title}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      sx={{
                        width: "100%",
                        color: c.asset === "-" ? "#979797" : "primary.main",
                        fontSize: "14px",
                      }}
                    >
                      <Box sx={{ ml: 2 }}>{c.title}</Box>

                      {selectedCategory === index ? (
                        <AssetInput
                          handleChange={(e) =>
                            setAsset(e.target.value.replaceAll(",", ""))
                          }
                          handleFocus={() =>
                            setAsset(c.asset === "-" ? "" : c.asset.toString())
                          }
                          asset={asset}
                          modifyFunction={() =>
                            modifySubcategory(category, c.title, c.asset)
                          }
                        />
                      ) : (
                        <Box onClick={() => setSelectedCategory(index)}>
                          {c.asset === "-"
                            ? `${c.asset}원`
                            : `${c.asset.toLocaleString("kr-KO")}원`}
                        </Box>
                      )}
                    </Stack>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </Box>
        ))}
      </List>

      <Button fullWidth variant="contained" onClick={openModifyModal}>
        카테고리별 자산 설정하기
      </Button>

      <AlertModal
        open={modifyModalOpen}
        handleClose={closeModifyModal}
        handleClickYes={() => handleCategoryAssets()}
        mode="modify"
      />
    </>
  );
}

export default CategoryList;
