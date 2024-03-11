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
import { useState } from "react";
import { SOMETHING_IS_WRONG } from "@constants/messages.tsx";
import SwitchButton from "../../../../../components/common/SwitchButton";
import ResetButton from "@components/common/ResetButton";
import {
  PersonalGoal,
  PersonalGoalForm,
  SetPersonalGoalQuery,
} from "@app/types/asset.ts";
import { getPersonalForm } from "@legacies/assetManagement/SavingsGoalContainer/utils.ts";
import { useDialog } from "@hooks/dialog/useDialog.tsx";

interface InputModalProps {
  closeModal: () => void;
  personal?: PersonalGoal;
  handleSetPersonalGoal: (data: SetPersonalGoalQuery) => void;
}

interface ChangePersonalGoal {
  (state: { target: { id: string; value: string | number | boolean } }): void;
}

function InputModal({
  closeModal,
  personal,
  handleSetPersonalGoal,
}: InputModalProps) {
  const { openConfirm } = useDialog();
  const [form, setForm] = useState<PersonalGoalForm>(getPersonalForm(personal));

  const changePersonalGoal: ChangePersonalGoal = (state) => {
    setForm({ ...form, [state.target.id]: state.target.value });
  };

  const divisionByType = (
    type: "day" | "month",
    money: number
  ): number | string => {
    switch (type) {
      case "day":
        return Math.round(money / 365);
      case "month":
        return Math.round(money / 12);
      default:
        return SOMETHING_IS_WRONG;
    }
  };

  const handleReset = async () => {
    const answer = await openConfirm({
      title: "알림",
      content: "모든 정보를 초기화하시겠습니까?",
      approveText: "네",
      rejectText: "아니오",
    });
    if (answer) {
      setForm(getPersonalForm());
    }
  };

  return (
    <Stack p={2} spacing={1}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <ResetButton handleClick={handleReset} />
        <Typography variant="h6">Personal Goal</Typography>
        <IconButton onClick={closeModal}>
          <ClearIcon />
        </IconButton>
      </Stack>
      <Divider sx={{ marginY: 1 }} />

      <Stack spacing={1}>
        {/* 목표 */}
        <FormControl fullWidth>
          <OutlinedInput
            id="personal_goal"
            startAdornment={
              <InputAdornment position="start">목표</InputAdornment>
            }
            value={form.personal_goal}
            onChange={changePersonalGoal}
            size="small"
            inputProps={{
              style: { textAlign: "right" },
            }}
          />
        </FormControl>

        {/* 금액 */}
        <FormControl fullWidth>
          <OutlinedInput
            id="goal_amount"
            startAdornment={
              <InputAdornment position="start">금액</InputAdornment>
            }
            value={form.goal_amount.toLocaleString("ko-KR")}
            onChange={(e) =>
              changePersonalGoal({
                target: {
                  id: e.target.id,
                  value: +e.target.value.replaceAll(",", ""),
                },
              })
            }
            size="small"
            inputProps={{
              style: { textAlign: "right" },
              step: 10,
            }}
            type="text"
            onFocus={(e) => e.target.select()}
          />
        </FormControl>

        {/* 기한 */}
        <TextField
          id="period"
          type="date"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">기한</InputAdornment>
            ),
          }}
          inputProps={{
            style: { textAlign: "right" },
          }}
          value={form.period}
          onChange={changePersonalGoal}
          size="small"
        />

        {/* 적금 단위 */}
        <Stack direction="row" spacing={1}>
          <Button
            fullWidth
            variant={form.criteria === "day" ? "contained" : "outlined"}
            onClick={() =>
              changePersonalGoal({
                target: {
                  id: "criteria",
                  value: "day",
                },
              })
            }
          >
            하루 기준
          </Button>
          <Button
            fullWidth
            variant={form.criteria === "month" ? "contained" : "outlined"}
            onClick={() =>
              changePersonalGoal({
                target: {
                  id: "criteria",
                  value: "month",
                },
              })
            }
          >
            한달 기준
          </Button>
        </Stack>

        {/* 필요 적금 액 */}
        <FormControl fullWidth>
          <OutlinedInput
            startAdornment={
              <InputAdornment position="start">필요 적금액</InputAdornment>
            }
            value={divisionByType(
              form.criteria,
              form.goal_amount
            ).toLocaleString("ko-KR")}
            size="small"
            inputProps={{
              style: { textAlign: "right" },
            }}
          />
        </FormControl>

        {/* 자동 적금 */}
        <FormControl fullWidth>
          <OutlinedInput
            startAdornment={
              <InputAdornment position="start">적금액 송금 설정</InputAdornment>
            }
            endAdornment={
              <SwitchButton
                checked={form.is_remittance}
                handleChange={() =>
                  changePersonalGoal({
                    target: {
                      id: "is_remittance",
                      value: !form.is_remittance,
                    },
                  })
                }
              />
            }
            size="small"
            readOnly
          />
        </FormControl>

        {/* 팝업 */}
        <FormControl fullWidth>
          <OutlinedInput
            startAdornment={
              <InputAdornment position="start">팝업창</InputAdornment>
            }
            endAdornment={
              <SwitchButton
                checked={form.pop_on}
                handleChange={() =>
                  changePersonalGoal({
                    target: {
                      id: "pop_on",
                      value: !form.pop_on,
                    },
                  })
                }
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
          // dispatch(setPersonalGoal(form));
          handleSetPersonalGoal({
            ...form,
            required_amount: divisionByType(
              form.criteria,
              form.goal_amount
            ).toString(),
            goal_amount: form.goal_amount.toString(),
          });
          closeModal();
        }}
      >
        나만의 목표 설정하기
      </Button>
    </Stack>
  );
}

export default InputModal;
