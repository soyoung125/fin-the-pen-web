import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY_USER } from "@constants/queryKeys.ts";

export const useUser = () => {
  return useQuery({
    queryKey: [QUERY_KEY_USER],
  });
};
