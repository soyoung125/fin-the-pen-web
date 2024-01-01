import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import { SCHEDULE_DRAWER } from "../../../../../constants/schedule.tsx";
import SwitchButton from "@components/common/SwitchButton.tsx";
import { UpdateStateInterface } from "@type/common.tsx";
import { useState } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { useScheduleForm } from "@containers/home/ScheduleDrawer/hooks/useScheduleForm.ts";

function SpendingInput() {
  const { scheduleForm, updateSchedule } = useScheduleForm();
  const expectedSpending = scheduleForm ? scheduleForm?.amount : "0";
  const [showError, setShowError] = useState(false);

  const changeSchedule = (state: React.MouseEvent<HTMLButtonElement>) => {
    updateSchedule({
      target: { id: state.currentTarget.id, value: state.currentTarget.value },
    });
  };

  const changeAmount = (state: React.ChangeEvent<HTMLInputElement>) => {
    const amount = state.target.value.replaceAll(",", "");
    if (Number(amount) > 100000000 && !showError) {
      setShowError(true);
    } else if (Number(amount) <= 100000000 && showError) {
      setShowError(false);
    }
    updateSchedule({
      target: {
        id: "amount",
        value: state.target.value.replaceAll(",", ""),
      },
    });
  };

  const changeFixAmount = (state: UpdateStateInterface) => {
    updateSchedule(state);
  };
  return (
    <Grid container spacing={2} px={2.5}>
      <Grid item xs={12} sx={{ typography: "h4", color: "primary.main" }}>
        {SCHEDULE_DRAWER.set_spending_title}
      </Grid>

      <Grid item container spacing={1.5}>
        <Grid item xs={6}>
          <Button
            variant={
              scheduleForm?.price_type === SCHEDULE_DRAWER.type_minus
                ? "contained"
                : "outlined"
            }
            fullWidth
            id="price_type"
            value={SCHEDULE_DRAWER.type_minus}
            onClick={changeSchedule}
            sx={{
              borderRadius: "20px",
            }}
          >
            출금
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button
            variant={
              scheduleForm?.price_type === SCHEDULE_DRAWER.type_plus
                ? "contained"
                : "outlined"
            }
            fullWidth
            id="price_type"
            value={SCHEDULE_DRAWER.type_plus}
            onClick={changeSchedule}
            sx={{
              borderRadius: "20px",
            }}
          >
            입금
          </Button>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <FormControl fullWidth>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            sx={{
              borderRadius: "4px",
              border: "1px solid",
              borderColor: showError ? "error.main" : "primary.main",
              padding: "8px 12px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                padding: "3px",
                borderRadius: 10,
                backgroundColor: "#735BF2",
                color: "white",
              }}
            >
              {scheduleForm?.price_type === "-" ? (
                <RemoveRoundedIcon fontSize="small" />
              ) : (
                <AddRoundedIcon fontSize="small" />
              )}
            </Box>
            <InputBase
              sx={{
                ml: 1,
                minWidth: "25px",
                width: `calc(${expectedSpending.length ?? 5} * 11px + 11px)`,
              }}
              id="expected_spending"
              value={
                expectedSpending === ""
                  ? "0"
                  : parseInt(expectedSpending, 10).toLocaleString("ko-KR")
              }
              onChange={changeAmount}
              endAdornment={SCHEDULE_DRAWER.won}
              inputProps={{
                style: { textAlign: "right" },
              }}
            />
          </Stack>
          <FormHelperText sx={{ ml: 0, color: "error.main" }}>
            {showError ? "입력 금액이 범위를 초과했습니다!" : ""}
          </FormHelperText>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h4" sx={{ color: "primary.main" }}>
            {SCHEDULE_DRAWER.fix_amount}
          </Typography>
          <Stack direction="row" alignItems="center">
            <SwitchButton
              checked={scheduleForm?.fix_amount ?? false}
              handleChange={() =>
                changeFixAmount({
                  target: {
                    id: "fix_amount",
                    value: !scheduleForm?.fix_amount,
                  },
                })
              }
            />
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default SpendingInput;
