import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY_USER } from "@constants/queryKeys.ts";
import { User } from "@type/auth.tsx";

export const useUser = () => {
  return useQuery<User>({
    queryKey: [QUERY_KEY_USER],
  });
};
