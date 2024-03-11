import { useState } from "react";
import { useDatePicker } from "@hooks/date-picker/hooks/useDatePicker.tsx";
import { useUser } from "@app/tanstack-query/useUser.ts";
import { useReports } from "@app/tanstack-query/reports/useReports.ts";
import moment from "moment";
import { useSetGoal } from "@app/tanstack-query/reports/useSetGoal.ts";
import { useGoals } from "@app/tanstack-query/assetManagement/goal/useGoals.ts";

const useSavingGoal = () => {
  const { data: user } = useUser();
  const { data: goal, isPending, isError } = useGoals(user?.user_id ?? "");

  return {
    goal,
    isPending,
    isError,
    // setExpenditureGoal,
  };
};

export default useSavingGoal;
