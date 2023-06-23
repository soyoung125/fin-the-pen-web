import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { NO_SIGNAL_FROM_SERVER } from "../../../domain/constants/messages";
import { fetchLogin, fetchMockLogin } from "../../api/API";
import {
  AsyncThunkStatusValue,
  SignInterface,
  User,
} from "../../../types/common";
import { ASYNC_THUNK_STATUS } from "../../../domain/constants/common";
import { RootState } from "../store";

interface UserState {
  user: User | null; // User가 null 인 경우 비로그인 상태
  status: AsyncThunkStatusValue;
}

const initialState: UserState = {
  user: null,
  status: "idle",
};

export const mockLogin = createAsyncThunk("user/mockLogin", async () => {
  const user = await fetchMockLogin();
  return user;
});

export const login = createAsyncThunk(
  "user/login",
  async (sign: SignInterface) => {
    const response = await fetchLogin(sign);
    if (response === undefined) {
      alert(`${NO_SIGNAL_FROM_SERVER} GUEST 계정으로 로그인을 시도합니다.`);
      const user = await fetchMockLogin();
      return user;
    }
    if (response === "") {
      alert("잘못된 아이디 혹은 비번입니다.");
      return null;
    } else {
      return response;
    }
  }
);

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
  },
  extraReducers: (builder) => {
    builder
      .addCase(mockLogin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        mockLogin.fulfilled,
        (state, action: PayloadAction<User | null>) => {
          state.status = "idle";
          state.user = action.payload;
        }
      )
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<User | null>) => {
        state.status = "idle";
        state.user = action.payload;
      });
  },
});

export const { initStatus, logOut } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;
export const selectStatus = (state: RootState) => state.user.status;

export default userSlice.reducer;
