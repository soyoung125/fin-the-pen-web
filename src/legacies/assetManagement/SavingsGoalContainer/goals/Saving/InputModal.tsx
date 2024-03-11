import {
  Button,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectSavingGoal, setSavingGoal } from "@redux/slices/assetSlice.tsx";
import { useAppDispatch } from "@redux/hooks.ts";
import SwitchButton from "../../../../../components/common/SwitchButton";
import ResetButton from "@components/common/ResetButton";
import { useDialog } from "@hooks/dialog/useDialog.tsx";
import { SavingGoal } from "@app/types/asset.ts";
import { getAmount } from "@legacies/assetManagement/SavingsGoalContainer/utils.ts";

interface InputModalProps {
  closeSavingGoalModal: () => void;
  saving?: SavingGoal;
  handleSetSavingGoal: (amount: number) => void;
}

function InputModal({
  closeSavingGoalModal,
  saving,
  handleSetSavingGoal,
}: InputModalProps) {
  const [form, setForm] = useState({
    year: getAmount(saving?.years_goal_amount),
    month: getAmount(saving?.months_goal_amount),
    autoSaving: true,
    popUp: false,
  });
  const { openConfirm } = useDialog();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = event.target;
    const newValue = parseInt(value.replaceAll(",", ""), 10);
    if (newValue >= 0) {
      setForm({
        ...form,
        year: id === "year" ? newValue : newValue * 12,
        month: id === "year" ? Math.round(newValue / 12) : newValue,
      });
    } else {
      alert("숫자는 0 이하일 수 없습니다.");
    }
  };

  const changeSavingGoal = (id: string, value: boolean): void => {
    setForm({ ...form, [id]: value });
  };

  /**
   * redux에 이미 저장된 목표 값 불러오기
   */
  const dispatch = useAppDispatch();
  const savingOption = useSelector(selectSavingGoal);
  useEffect(() => {
    setForm({
      ...form,
      autoSaving: savingOption.autoSaving,
      popUp: savingOption.popUp,
    });
  }, [savingOption]);

  const handleReset = async () => {
    const answer = await openConfirm({
      title: "알림",
      content: "모든 정보를 초기화하시겠습니까?",
      approveText: "네",
      rejectText: "아니오",
    });
    if (answer) {
      setForm({
        year: 0,
        month: 0,
        autoSaving: true,
        popUp: false,
      });
    }
  };

  return (
    <Stack p={2} spacing={1}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <ResetButton handleClick={handleReset} />
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          저축 목표 설정
        </Typography>
        <IconButton onClick={() => closeSavingGoalModal()}>
          <ClearIcon />
        </IconButton>
      </Stack>

      <Divider sx={{ marginY: 1 }} />

      <Stack spacing={1}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          1 Year Goal
        </Typography>
        <TextField
          fullWidth
          placeholder="한해동안의 저축 목표액을 입력하세요"
          type="text"
          value={form.year.toLocaleString("ko-KR")}
          onFocus={(e) => e.target.select()}
          onChange={handleChange}
          id="year"
          inputProps={{
            style: { textAlign: "right" },
          }}
        />
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          1 Month Goal
        </Typography>
        <TextField
          fullWidth
          placeholder="한해 저축 목표액을 입력하면 한달 저축 목표금액이 표시됩니다. "
          type="text"
          value={form.month.toLocaleString("ko-KR")}
          onFocus={(e) => e.target.select()}
          onChange={handleChange}
          id="month"
          inputProps={{
            style: { textAlign: "right" },
          }}
        />

        {/* 적금액 송금 설정 */}
        <FormControl fullWidth>
          <OutlinedInput
            startAdornment={
              <InputAdornment position="start">적금액 송금 설정</InputAdornment>
            }
            endAdornment={
              <SwitchButton
                checked={form.autoSaving}
                handleChange={() =>
                  changeSavingGoal("autoSaving", !form.autoSaving)
                }
              />
            }
            size="small"
            readOnly
          />
        </FormControl>

        {/* 팝업창 */}
        <FormControl fullWidth>
          <OutlinedInput
            startAdornment={
              <InputAdornment position="start">팝업창</InputAdornment>
            }
            endAdornment={
              <SwitchButton
                checked={form.popUp}
                handleChange={() => changeSavingGoal("popUp", !form.popUp)}
              />
            }
            size="small"
            readOnly
          />
        </FormControl>
      </Stack>
      <Button
        fullWidth
        variant="contained"
        onClick={() => {
          dispatch(setSavingGoal(form));
          handleSetSavingGoal(form.year);
          closeSavingGoalModal();
        }}
      >
        한해 저축 목표 설정하기
      </Button>
    </Stack>
  );
}

export default InputModal;
