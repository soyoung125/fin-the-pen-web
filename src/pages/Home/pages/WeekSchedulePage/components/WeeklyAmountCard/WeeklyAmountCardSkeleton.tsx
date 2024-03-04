import {
  AmountBox,
  AmountText,
} from "@pages/Home/pages/WeekSchedulePage/components/WeeklyAmountCard/WeeklyAmountCard.styles.ts";
import { Skeleton, Stack } from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";

export interface WeeklyAmountCardSkeletonProps {
  isIncome: boolean;
}

function WeeklyAmountCardSkeleton({ isIncome }: WeeklyAmountCardSkeletonProps) {
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
        <AmountText>
          <Skeleton width="50px" height="24px" />
        </AmountText>
      </AmountBox>
    </Stack>
  );
}

export default WeeklyAmountCardSkeleton;
