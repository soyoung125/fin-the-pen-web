import { useUser } from "@app/tanstack-query/useUser.ts";
import { useGoals } from "@app/tanstack-query/assetManagement/goal/useGoals.ts";
import { useSetSavingGoal } from "@app/tanstack-query/assetManagement/goal/useSetSavingGoal.ts";

const useSavingGoal = () => {
  const { data: user } = useUser();
  const { data: goal, isPending, isError } = useGoals(user?.user_id ?? "");
  const { setSavingGoal } = useSetSavingGoal();

  const handleSetSavingGoal = (yearAmount: number) => {
    setSavingGoal({
      user_id: user?.user_id ?? "",
      years_goal_amount: yearAmount.toString(),
    });
  };

  return {
    goal,
    isPending,
    isError,
    handleSetSavingGoal,
  };
};

export default useSavingGoal;
