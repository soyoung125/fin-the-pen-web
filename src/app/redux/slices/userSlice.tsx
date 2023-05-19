/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { NO_SIGNAL_FROM_SERVER } from '../../../domain/constants/messages';
import { fetchLogin } from '../../api/API';
import { fetchMockLogin } from '../../api/mockAPI';
import { AsyncThunkStatusValue, User } from '../../../types/common';
import { ASYNC_THUNK_STATUS } from '../../../domain/constants/common';

interface InitialState {
  user: User | null; // User
  status: AsyncThunkStatusValue;
}

const initialState: InitialState = {
  user: null,
  status: 'idle',
};

export const mockLogin = createAsyncThunk(
  // 지연 있는 메소드
  'user/mockLogin',
  async () => {
    const response = await fetchMockLogin();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  },
);

export const login = createAsyncThunk(
  'user/login',
  async (sign) => {
    const response = await fetchLogin(sign);
    if (response === undefined) {
      alert(`${NO_SIGNAL_FROM_SERVER} GUEST 계정으로 로그인을 시도합니다.`);
      const mock = await fetchMockLogin();
      return mock.data;
    }
    if (response === '') {
      alert('잘못된 아이디 혹은 비번입니다.');
      return null;
    }
    return response;
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    initStatus: (state) => {
      state.status = ASYNC_THUNK_STATUS.fulfilled;
    },
    setUser: (state, action) => {
      // 삭제 될 예정인 메소드 (createAsyncThunk로 이전 예정)
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(mockLogin.pending, (state) => {
        // mockLogin가 진행중일 때
        state.status = 'loading';
      })
      .addCase(mockLogin.fulfilled, (state, action) => {
        // mockLogin가 끝나면
        state.status = 'idle';
        state.user = action.payload;
      })
      .addCase(login.pending, (state) => {
        // login가 진행중일 때
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        // login가 끝나면
        state.status = 'idle';
        state.user = action.payload;
      });
  },
});

export const { initStatus, setUser, logOut } = userSlice.actions;

export const selectUser = (state: any) => (state.user as InitialState).user;
export const selectStatus = (state: any) => (state.user as InitialState).status;

export default userSlice.reducer;
