import {
  Button,
  Grid,
  InputAdornment,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { SCHEDULE_DRAWER } from "../../../../../constants/schedule";
import { selectSchedule } from "../../../../../app/redux/slices/scheduleSlice";
import { updateSchedule, updateSpendingType } from "../../domain/schedule";
import { useAppDispatch } from "../../../../../app/redux/hooks";
import SwitchButton from "@components/common/SwitchButton";
import { UpdateStateInterface } from "@type/common";
import { useState } from "react";

function SpendingInput({ mode }: { mode: string }) {
  const dispatch = useAppDispatch();
  const schedule = useSelector(selectSchedule);
  const expectedSpending = schedule ? schedule?.amount : "0";
  const [showError, setShowError] = useState(false);

  const changeSpendingType = () => {
    updateSpendingType(dispatch, schedule);
  };

  const changeSchedule = (state: React.MouseEvent<HTMLButtonElement>) => {
    updateSchedule(dispatch, schedule, {
      target: { id: state.currentTarget.id, value: state.currentTarget.value },
    });
  };

  const changeAmount = (state: React.ChangeEvent<HTMLInputElement>) => {
    console.log(state);
    const amount = state.target.value.replaceAll(",", "");
    if (Number(amount) > 100000000 && !showError) {
      setShowError(true);
    } else if (Number(amount) <= 100000000 && showError) {
      setShowError(false);
    }
    updateSchedule(dispatch, schedule, {
      target: {
        id: "amount",
        value: state.target.value.replaceAll(",", ""),
      },
    });
  };

  const changeFixAmount = (state: UpdateStateInterface) => {
    updateSchedule(dispatch, schedule, state);
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
              schedule?.price_type === SCHEDULE_DRAWER.type_minus
                ? "contained"
                : "outlined"
            }
            fullWidth
            id="price_type"
            value={SCHEDULE_DRAWER.type_minus}
            onClick={mode === "create" ? changeSchedule : changeSpendingType}
            sx={{
              borderRadius: "17px",
            }}
          >
            출금
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button
            variant={
              schedule?.price_type === SCHEDULE_DRAWER.type_plus
                ? "contained"
                : "outlined"
            }
            fullWidth
            id="price_type"
            value={SCHEDULE_DRAWER.type_plus}
            onClick={mode === "create" ? changeSchedule : changeSpendingType}
            sx={{
              borderRadius: "17px",
            }}
          >
            입금
          </Button>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <TextField
          variant="outlined"
          id="expected_spending"
          value={
            expectedSpending === ""
              ? "0"
              : parseInt(expectedSpending, 10).toLocaleString("ko-KR")
          }
          onChange={changeAmount}
          error={showError}
          helperText={showError ? "입력 금액이 범위를 초과했습니다!" : ""}
          fullWidth
          type="text"
          size="small"
          inputProps={{
            style: { textAlign: "right" },
            min: 0,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    borderRadius: "100px",
                    minWidth: 0,
                    width: "30px",
                    height: "30px",
                  }}
                >
                  {schedule?.price_type}
                </Button>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {SCHEDULE_DRAWER.won}
              </InputAdornment>
            ),
          }}
        />
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
              checked={schedule?.fix_amount ?? false}
              handleChange={() =>
                changeFixAmount({
                  target: {
                    id: "fix_amount",
                    value: schedule?.fix_amount ? false : true,
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
