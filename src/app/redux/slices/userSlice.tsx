import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AsyncThunkStatusValue } from "@app/types/common.ts";
import { RootState } from "../store";
import { ASYNC_THUNK_STATUS } from "../../../constants/common.ts";
import { User } from "@app/types/auth.ts";

interface UserState {
  user: User | null; // User가 null 인 경우 비로그인 상태
  status: AsyncThunkStatusValue;
}

const initialState: UserState = {
  user: null,
  status: "idle",
};

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
});

export const { initStatus, logOut, setUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;
export const selectStatus = (state: RootState) => state.user.status;

export default userSlice.reducer;
