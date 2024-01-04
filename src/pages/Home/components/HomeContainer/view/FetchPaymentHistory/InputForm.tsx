import {
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
} from "@mui/material";
import moment from "moment";
import { useEffect, useState } from "react";
import {
  BANK_ORGANIZATION,
  CARD_ORGANIZATION,
} from "@constants/organizations.ts";
import useHeader from "@hooks/useHeader.ts";
import OrderByInput from "@components/fetchPaymentHistory/OrderByInput";
import PeriodInput from "@components/fetchPaymentHistory/PeriodInput.tsx";
import { HEADER_MODE } from "@app/types/common.ts";
import {
  setBottomBarOpenFalse,
  setBottomBarOpenTrue,
} from "@redux/slices/commonSlice.tsx";
import { useAppDispatch } from "@redux/hooks.ts";

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
  changeShowInput: () => void;
}

function InputForm({
  selected,
  form,
  changeDetailInfo,
  changeStartAndEndDate,
  changeShowInput,
}: InputFormProps) {
  const [isSelectStartDate, setIsSelectStartDate] = useState(false);
  const dispatch = useAppDispatch();

  useHeader(true, HEADER_MODE.search);

  useEffect(() => {
    let back_button: Element | null = null;

    dispatch(setBottomBarOpenFalse());

    setTimeout(() => {
      back_button = document.querySelector("#back_button");
      back_button?.addEventListener("click", handleClickBack);
    }, 1);

    return () => {
      dispatch(setBottomBarOpenTrue()) as unknown as void;
      back_button?.removeEventListener("click", handleClickBack);
    };
  }, []);

  const handleClickBack = (e: Event) => {
    e.stopPropagation();
    changeShowInput();
  };

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
        {organizations.map((organization, i) => (
          <MenuItem key={i} value={organization.value}>
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

      <PeriodInput
        startDate={form.startDate}
        endDate={form.endDate}
        isSelectStartDate={isSelectStartDate}
        changeDate={changeDate}
      />

      <OrderByInput
        selected={form.orderBy}
        changeDetailInfo={changeDetailInfo}
      />
    </Stack>
  );
}

export default InputForm;
