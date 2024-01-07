import {
  Box,
  Button,
  Divider,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";

export interface MonthlyExpenditureTargetModalProps {
  yyyyMM: `${number}-${number}`;
  closeModal: () => void;
}

function MonthlyExpenditureTargetModal({
  yyyyMM,
  closeModal,
}: MonthlyExpenditureTargetModalProps) {
  /**
   * TODO: useMutation으로 목표 지출 금액 변경하기
   */

  const [amount, setAmount] = useState(0);
  const month = yyyyMM.split("-")[1];

  const onChangeAmountInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numberValue = Number(e.target.value.replace(/\D/g, ""));
    setAmount(numberValue > 1_000_000_000 ? 1_000_000_000 : numberValue);
  };
  const onClickSetMonthlyExpenditureTarget = async () => {
    alert("목표 지출 금액 변경하기 (미구현, useMutation으로 변경하기)");
    // await 뮤테이션
    closeModal();
  };

  return (
    <Box borderRadius="20px" p="20px">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <RefreshIcon onClick={() => setAmount(0)} />
        <Typography fontSize="20px">지출 목표액 설정</Typography>
        <ClearIcon onClick={closeModal} />
      </Stack>
      <Divider sx={{ margin: "12px 0 12px 0" }} />
      <Stack gap="12px">
        <Typography>{month}월 한달 간의 지출 목표액을 입력하세요</Typography>
        <InputBase
          sx={{
            borderRadius: "4px",
            border: "1px solid #A9ACB2",
            p: "10px",
          }}
          value={amount}
          onChange={onChangeAmountInput}
          inputProps={{
            style: {
              textAlign: "right",
              marginRight: "10px",
              color: "#8C919C",
            },
          }}
          endAdornment={<Typography color="#735BF2">원</Typography>}
        />
        <Button
          variant="contained"
          fullWidth
          size="large"
          onClick={onClickSetMonthlyExpenditureTarget}
        >
          지출 목표액 설정
        </Button>
      </Stack>
    </Box>
  );
}

export default MonthlyExpenditureTargetModal;
