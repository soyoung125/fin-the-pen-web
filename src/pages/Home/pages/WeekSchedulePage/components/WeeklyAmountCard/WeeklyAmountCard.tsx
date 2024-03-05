import { Box, Stack, Typography } from "@mui/material";
import {
  AmountBox,
  AmountText,
} from "@pages/Home/pages/WeekSchedulePage/components/WeeklyAmountCard/WeeklyAmountCard.styles.ts";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";

export interface WeeklyAmountCardProps {
  isIncome: boolean;
  amount: number;
}

function WeeklyAmountCard({ isIncome, amount }: WeeklyAmountCardProps) {
  return (
    <Stack>
      <AmountBox $isTitle>
        <Stack direction="row" spacing={1} alignItems="center">
          {isIncome ? (
            <>
              <AddCircleRoundedIcon sx={{ color: "#2F8BF7" }} />
              <AmountText>수입</AmountText>
            </>
          ) : (
            <>
              <RemoveCircleRoundedIcon sx={{ color: "#F26969" }} />
              <AmountText>지출</AmountText>
            </>
          )}
        </Stack>
      </AmountBox>
      <AmountBox>
        <AmountText>{amount.toLocaleString()}원</AmountText>
      </AmountBox>
    </Stack>
  );
}

export default WeeklyAmountCard;
