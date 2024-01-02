/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import { Box, IconButton, Stack } from "@mui/material";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Title from "../../../components/common/Title";
import SpendingDetailCard from "./detailCard/SpendingDetailCard";
import { selectDate } from "../../../app/redux/slices/scheduleSlice";
import AssetManagement from "./detailCard/AssetManagement";
import { selectAssetsByCategory } from "../../../app/redux/slices/assetSlice";
import { AssetsByCategoryInterface } from "../../../types/common";
import useSchedule from "@hooks/useSchedule.ts";
import moment from "moment";

function AnalysisDetailContainer() {
  const { state } = useLocation();
  const { color, category, type } = state;
  const { schedules } = useSchedule();
  const date = useSelector(selectDate);
  const momentDate = moment(date);
  const assetsByCategory: AssetsByCategoryInterface[] = useSelector(
    selectAssetsByCategory
  );
  const [selectedItem, setSelectedItem] = useState(
    schedules?.filter(
      (s) => momentDate.isSame(s.start_date, "month") && s.category === category
    ) ?? []
  );
  const [spending, setSpending] = useState(0);
  const [sortByDate, setSortByDate] = useState(true);
  const [isAscending, setIsAscending] = useState(true);
  const [asset, setAsset] = useState<"-" | number>("-");
  const [title, setTitle] = useState<string>(`${type} 예산`);

  useEffect(() => {
    const categoryType = assetsByCategory.find((c) => c.type === type);
    if (categoryType) {
      const value = categoryType.categories.find((c) => c.title === category);
      const newAsset = value ? value.asset : "-";
      setAsset(newAsset === "-" ? categoryType.total : newAsset);
      setTitle(newAsset === "-" ? `${type} 예산` : `${type}/${category} 예산`);
    }
  }, []);

  useEffect(() => {
    const newData =
      schedules
        ?.filter(
          (s) =>
            momentDate.isSame(s.start_date, "month") && s.category === category
        )
        .sort((a, b) => +new Date(a.start_date) - +new Date(b.start_date)) ??
      [];
    setSelectedItem(newData);
    setSpending(
      newData.reduce(
        (result, schedule) => result + parseInt(schedule.amount, 10),
        0
      )
    );
  }, [date]);

  useEffect(() => {
    if (sortByDate) {
      setSelectedItem([
        ...selectedItem.sort((a, b) =>
          +new Date(a.start_date) - +new Date(b.start_date)
            ? +!isAscending
            : +isAscending
        ),
      ]);
    } else {
      setSelectedItem([
        ...selectedItem.sort((a, b) =>
          b.amount > a.amount ? +!isAscending : +isAscending
        ),
      ]);
    }
  }, [sortByDate]);

  useEffect(() => {
    setSelectedItem([...selectedItem.reverse()]);
  }, [isAscending]);

  return (
    <Box px={2}>
      <Title
        type={null}
        title={
          <Stack direction="row">
            <Box mr={1}>{`${category} 지출 내역`}</Box>
            <Box
              sx={{
                typography: "subtitle2",
                color: "primary.main",
                display: "flex",
                mt: "auto",
              }}
            >
              {`총 ${selectedItem.length}건`}
            </Box>
          </Stack>
        }
      >
        <Stack direction="row">
          <Box
            sx={{ display: "flex", my: "auto", color: "primary.main" }}
            onClick={() => setSortByDate(!sortByDate)}
          >
            {sortByDate ? "날짜순" : "금액순"}
          </Box>
          <IconButton
            onClick={() => setIsAscending(!isAscending)}
            color="primary"
            size="small"
            sx={{ p: 0 }}
          >
            {isAscending ? (
              <ArrowDropDownRoundedIcon fontSize="large" />
            ) : (
              <ArrowDropUpRoundedIcon fontSize="large" />
            )}
          </IconButton>
        </Stack>
      </Title>
      <Stack sx={{ borderRadius: 3, marginBottom: 2 }}>
        {selectedItem.map((s) => (
          <SpendingDetailCard
            schedule={s}
            key={Math.random()}
            bgColor={color}
          />
        ))}
      </Stack>

      {asset !== "-" && (
        <AssetManagement
          spending={spending}
          asset={asset}
          balance={asset - spending}
          title={title}
        />
      )}
    </Box>
  );
}

export default AnalysisDetailContainer;
