import { useQuery } from "@tanstack/react-query";
import { fetchTodo } from "./api.ts";

export const useTodo = () => {
  return useQuery({
    queryKey: ["todo"],
    queryFn: fetchTodo,
  });
};
