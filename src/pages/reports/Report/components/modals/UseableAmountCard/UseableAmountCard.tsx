import { Stack, Typography } from "@mui/material";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { AmountContainer, AmountBox } from "./UseableAmount.style.ts";

function UseableAmountCard() {
  return (
    <Stack px={1} spacing={2}>
      <Typography variant={"h1"} color="primary" textAlign="center">
        사용 가능 금액
      </Typography>

      <Stack
        spacing={0.5}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <AmountContainer>
          <AmountBox>{`이번 달\n목표 지출액`}</AmountBox>
        </AmountContainer>

        <RemoveRoundedIcon color="primary" />

        <AmountContainer>
          <AmountBox>{`이번 달\n지출 금액`}</AmountBox>
          <AddRoundedIcon color="primary" />
          <AmountBox>{`지출 예정\n금액`}</AmountBox>
        </AmountContainer>
      </Stack>
    </Stack>
  );
}

export default UseableAmountCard;
