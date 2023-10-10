import {
  Stack,
  Select,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  TextField,
  Box,
  Grid,
  Button,
} from "@mui/material";
import {
  LocalizationProvider,
  MobileDatePicker,
  PickersDay,
} from "@mui/x-date-pickers";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import { RenderDayFunction } from "../../../../../types/common";
import { useEffect, useState } from "react";
import {
  BANK_ORGANIZATION,
  CARD_ORGANIZATION,
} from "../../../../../constants/organizations";
import { useRecoilValue } from "recoil";
import { bottomTabMenuRepository } from "@app/recoil/bottomTabMenu";
import useHeader from "@hooks/useHeader";
import { HEADER_MODE } from "@app/recoil/header";
import OrderByInput from "@components/fetchPaymentHistory/OrderByInput";
import PeriodInput from "@components/fetchPaymentHistory/PeriodInput";

interface InputFormProps {
  selected: string;
  form: {
    organization: string;
    cardNo: string;
    account: string;
    connectedId: string;
    startDate: string;
    endDate: string;
    orderBy: string;
    inquiryType: string;
  };
  changeDetailInfo: (e: {
    target: { id: string; value: string | number };
  }) => void;
  changeStartAndEndDate: (date: string) => void;
}

function InputForm({
  selected,
  form,
  changeDetailInfo,
  changeStartAndEndDate,
}: InputFormProps) {
  const [isSelectStartDate, setIsSelectStartDate] = useState(false);
  const { openBottomBar, closeBottomBar } = useRecoilValue(bottomTabMenuRepository);

  useHeader(true, HEADER_MODE.search);

  useEffect(() => {
    closeBottomBar();
    return (() => openBottomBar());
  }, [])

  const organizations =
    selected === "card" ? CARD_ORGANIZATION : BANK_ORGANIZATION;

  const changeDate = (date: string) => {
    if (isSelectStartDate) {
      if (moment(date).isAfter(form.endDate)) {
        changeStartAndEndDate(date);
      } else {
        changeDetailInfo({ target: { id: "startDate", value: date } });
      }
    } else {
      if (moment(date).isBefore(form.startDate)) {
        changeStartAndEndDate(date);
      } else {
        changeDetailInfo({ target: { id: "endDate", value: date } });
      }
    }
    setIsSelectStartDate(!isSelectStartDate);
  };

  const renderDayInPicker: RenderDayFunction = (
    day,
    _value,
    DayComponentProps
  ) => {
    if (moment(form.startDate).isSame(form.endDate)) {
      return <PickersDay {...DayComponentProps} />;
    }
    if (moment(form.startDate).isSame(day)) {
      return (
        <PickersDay
          sx={{
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            marginX: 0,
            width: "40px",
          }}
          className="Mui-selected"
          {...DayComponentProps}
        />
      );
    }
    if (moment(form.endDate).isSame(day)) {
      return (
        <PickersDay
          sx={{
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            marginX: 0,
            width: "40px",
          }}
          className="Mui-selected"
          {...DayComponentProps}
        />
      );
    }
    if (
      moment(form.startDate).isBefore(day) &&
      moment(form.endDate).isAfter(day)
    ) {
      return (
        <PickersDay
          sx={{
            borderRadius: 0,
            marginX: 0,
            width: "40px",
          }}
          className="Mui-selected"
          {...DayComponentProps}
        />
      );
    }
    return <PickersDay {...DayComponentProps} />;
  };

  return (
    <Stack spacing={1}>
      <Select
        inputProps={{
          IconComponent: () => null,
          style: { textAlign: "right" },
        }}
        size="small"
        startAdornment={
          <InputAdornment position="start">
            {selected === "card" ? "카드사" : "거래은행"}
          </InputAdornment>
        }
        sx={{
          ".MuiSelect-select.MuiSelect-outlined": {
            textAlign: "right",
            paddingRight: "14px",
          },
        }}
        value={form.organization}
        onChange={(e) =>
          changeDetailInfo({
            target: { id: "organization", value: e.target.value },
          })
        }
      >
        {organizations.map((organization) => (
          <MenuItem key={Math.random()} value={organization.value}>
            {organization.name}
          </MenuItem>
        ))}
      </Select>

      <OutlinedInput
        id={selected === "card" ? "cardNo" : "account"}
        startAdornment={
          <InputAdornment position="start">
            {selected === "card" ? "카드번호" : "계좌번호"}
          </InputAdornment>
        }
        value={selected === "card" ? form.cardNo : form.account}
        onChange={changeDetailInfo}
        size="small"
        inputProps={{
          style: { textAlign: "right" },
        }}
      />

      <OutlinedInput
        id="connectedId"
        startAdornment={
          <InputAdornment position="start">커넥티드ID</InputAdornment>
        }
        value={form.connectedId}
        onChange={changeDetailInfo}
        size="small"
        inputProps={{
          style: { textAlign: "right" },
        }}
      />

      <PeriodInput startDate={form.startDate} endDate={form.endDate} isSelectStartDate={isSelectStartDate} changeDate={changeDate} />

      <OrderByInput selected={form.orderBy} changeDetailInfo={changeDetailInfo} />
    </Stack>
  );
}

export default InputForm;
