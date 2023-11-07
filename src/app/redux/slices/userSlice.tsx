import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AsyncThunkStatusValue } from "../../../types/common";
import { RootState } from "../store";
import { setSessionStorage } from "@utils/storage.ts";
import { SESSION_STORAGE_KEY_TOKEN } from "@api/keys.ts";
import axios from "axios";
import { ASYNC_THUNK_STATUS } from "../../../constants/common.tsx";
import { SignIn, User } from "@type/auth.tsx";
import { DOMAIN } from "@api/url.ts";

interface UserState {
  user: User | null; // User가 null 인 경우 비로그인 상태
  status: AsyncThunkStatusValue;
}

const initialState: UserState = {
  user: null,
  status: "idle",
};

export const fetchLogin = async (sign: SignIn) => {
  try {
    const response = await axios.post<User | "">(
      `${DOMAIN}/fin-the-pen-web/sign-in`,
      sign
    );
    return response.data as User | "";
  } catch (err) {
    alert(err);
  }
};

export const login = createAsyncThunk("user/login", async (sign: SignIn) => {
  const response = await fetchLogin(sign);
  if (response === "") {
    alert("잘못된 아이디 혹은 비번입니다.");
    return null;
  } else {
    return response;
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    initStatus: (state) => {
      state.status = ASYNC_THUNK_STATUS.fulfilled;
    },
    logOut: (state) => {
      state.user = null;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = ASYNC_THUNK_STATUS.pending;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = ASYNC_THUNK_STATUS.fulfilled;
        // TODO: 추후에 토큰 방식으로 수정 예정입니다. 지금은 기존 구조로 진행합니다.
        const generateRandomToken = () => {
          const randomEightDigit = Math.floor(
            10000000 + Math.random() * 90000000
          ).toString();
          setSessionStorage(SESSION_STORAGE_KEY_TOKEN, randomEightDigit);
        };
        generateRandomToken();
        state.user = action.payload as User | null;
      });
  },
});

export const { initStatus, logOut, setUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;
export const selectStatus = (state: RootState) => state.user.status;

export default userSlice.reducer;
