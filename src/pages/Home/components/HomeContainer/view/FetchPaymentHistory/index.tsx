import { Box, Button } from "@mui/material";
import moment from "moment";
import { useState } from "react";
import { useAppSelector } from "@redux/hooks.ts";
import { selectGuestMode } from "@redux/slices/commonSlice.tsx";
import { fetchGetTransavrionList } from "@api/API.tsx";
import RoundedPaper from "@components/common/RoundedPaper.tsx";
import InputForm from "./InputForm.tsx";
import OptionSelector from "./OptionSelector.tsx";

function FetchPaymentHistory() {
  const [selected, setSelected] = useState<string>("card");
  const [showInput, setShowInput] = useState(false);
  const [form, setForm] = useState({
    organization: "",
    account: "",
    cardNo: "",
    connectedId: "",
    startDate: moment().format("YYYY-MM-DD"),
    endDate: "",
    orderBy: "0",
    inquiryType: "0",
  });
  const guestMode = useAppSelector(selectGuestMode);
  const title: { [key: string]: string } = {
    card: "카드 승인내역 조회",
    account: "은행/계좌 거래내역 조회",
  };

  const changeDetailInfo = (e: {
    target: { id: string; value: string | number };
  }) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const changeStartAndEndDate = (date: string) => {
    setForm({ ...form, startDate: date, endDate: date });
  };

  const changeShowInput = () => {
    setShowInput(!showInput);
  };

  const handleSubmit = async () => {
    if (selected === "card") {
      console.log(form);
    } else if (selected === "account") {
      if (!guestMode) {
        const result = await fetchGetTransavrionList({
          ...form,
          endDate: form.endDate.replaceAll("-", ""),
          startDate: form.startDate.replaceAll("-", ""),
        });
        console.log(result);
      } else {
        console.log({
          ...form,
          endDate: form.endDate.replaceAll("-", ""),
          startDate: form.startDate.replaceAll("-", ""),
        });
      }
    }
  };

  return (
    <Box px={2.5} py={3}>
      <RoundedPaper my={1}>
        <Box
          sx={{
            fontWeight: "bold",
            fontSize: "20px",
            textAlign: "center",
            marginTop: 1,
            marginBottom: "40px",
          }}
        >
          {showInput ? title[selected] : "My 결제 내역 조회"}
        </Box>

        {showInput ? (
          <InputForm
            selected={selected}
            form={form}
            changeDetailInfo={changeDetailInfo}
            changeStartAndEndDate={changeStartAndEndDate}
            changeShowInput={changeShowInput}
          />
        ) : (
          <OptionSelector
            selected={selected}
            changeOption={(option) => setSelected(option)}
          />
        )}
        <Button
          variant="contained"
          fullWidth
          sx={{ marginTop: "40px" }}
          onClick={showInput ? handleSubmit : changeShowInput}
        >
          {showInput ? "확인" : "조회하기"}
        </Button>
      </RoundedPaper>
    </Box>
  );
}

export default FetchPaymentHistory;
