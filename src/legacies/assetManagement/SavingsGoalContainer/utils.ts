import { PersonalGoal, PersonalGoalForm } from "@app/types/asset.ts";
import moment from "moment";

export const getAmount = (amount?: string) => {
  if (!amount || amount === "?") return 0;
  return Number(amount);
};

export const getPersonalForm = (data?: PersonalGoal): PersonalGoalForm => {
  if (!data || data.criteria === "?") {
    return {
      personal_goal: "",
      goal_amount: 0,
      period: moment().add(1, "year").format("YYYY-MM-DD"),
      criteria: "day",
      is_remittance: true,
      pop_on: false,
    };
  }
  return {
    personal_goal: data.goal_name,
    goal_amount: getAmount(data.goal_amount),
    period: data.period,
    criteria: data.criteria,
    is_remittance: data.is_remittance === "true",
    pop_on: data.is_pop_on === "true",
  };
};
