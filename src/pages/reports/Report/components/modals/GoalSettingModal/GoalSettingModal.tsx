import {
  Stack,
  Button,
  Typography,
  IconButton,
  Divider,
  Link,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import RestartAltRoundedIcon from "@mui/icons-material/RestartAltRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface GoalSettingModalProps {
  closeModal: () => void;
  handleSubmit: (value: number) => void;
  navigateTo?: string;
}

function GoalSettingModal({
  closeModal,
  handleSubmit,
  navigateTo,
}: GoalSettingModalProps) {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(0);

  const changeAmount = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value.split(",").join(""));
    if (newValue) {
      setAmount(newValue);
    }
  };

  const handleClickSubmit = () => {
    closeModal();
    handleSubmit(amount);
  };

  return (
    <Stack p={2.5} spacing={1.5}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <IconButton onClick={() => setAmount(0)}>
          <RestartAltRoundedIcon />
        </IconButton>
        <Typography variant={"h1"}>지출 목표액 설정</Typography>
        <IconButton onClick={closeModal}>
          <CloseRoundedIcon />
        </IconButton>
      </Stack>

      <Divider />

      <Typography variant={"h5"} pt={2}>
        O월 한달 간의 지출 목표액을 입력하세요
      </Typography>

      <OutlinedInput
        endAdornment={<InputAdornment position="start">원</InputAdornment>}
        value={amount.toLocaleString()}
        onChange={changeAmount}
        size="small"
        inputProps={{
          style: { textAlign: "right" },
        }}
      />

      <Button variant="contained" color="primary" onClick={handleClickSubmit}>
        지출 목표액 설정
      </Button>

      <Link onClick={() => navigateTo && navigate(navigateTo)}>
        구체적인 지출 목표액을 변경하고 싶어요.
      </Link>
    </Stack>
  );
}

export default GoalSettingModal;
