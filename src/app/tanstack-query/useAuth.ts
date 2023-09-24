import { SignIn, User } from "@type/auth.tsx";
import { DOMAIN } from "@api/url.ts";
import { useMutation } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";
import { userState } from "@recoil/user.ts";
import { useNavigate } from "react-router-dom";
import PATH from "../../constants/path.tsx";
import { setSessionStorage } from "@utils/storage.ts";
import { SESSION_STORAGE_KEY_TOKEN } from "@api/keys.ts";

const fetchSignIn = async (credentials: SignIn) => {
  return fetch(`${DOMAIN}/fin-the-pen-web/sign-in`, {
    method: "POST",
    body: JSON.stringify(credentials),
  });
};

// TODO: 추후에 토큰 방식으로 수정 예정입니다. 지금은 기존 구조로 진행합니다.
const generateRandomToken = () => {
  const randomEightDigit = Math.floor(
    10000000 + Math.random() * 90000000
  ).toString();
  setSessionStorage(SESSION_STORAGE_KEY_TOKEN, randomEightDigit);
};

export const useAuth = () => {
  // 추후에 토큰 방식으로 수정 예정입니다. 지금은 기존 구조로 진행합니다.
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationFn: fetchSignIn,
    onSuccess: async (data) => {
      const user: User | "" = await data.json();
      if (user !== "") {
        setUser(user);
        generateRandomToken();
        navigate(PATH.home);
      } else {
        alert("로그인에 실패했습니다.");
      }
    },
  });

  const signIn = (credentials: SignIn) => {
    mutate(credentials);
  };

  const signOut = () => {
    setUser(undefined);
  };

  const mockSignIn = () => {
    alert("게스트 모드로 로그인 합니다.");
    generateRandomToken();
    setUser({
      id: 0,
      user_id: "guest@finthepen.com",
      name: "guest by msw",
      bday: "2000-01-01",
      registerDate: "2023-01-25T14:57:08.023+00:00",
      phone_number: "010-4413-5698",
    });
    navigate(PATH.home);
  };

  return { signIn, signOut, isLoading, mockSignIn };
};
