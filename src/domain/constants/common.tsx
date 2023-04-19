import { AsyncThunkStatus, HeaderMode } from '../../types/common';

export const ASYNC_THUNK_STATUS: AsyncThunkStatus = {
  pending: 'loading',
  fulfilled: 'idle',
};

export const HEADER_MODE: HeaderMode = {
  analysis: 'analysis',
  home: 'home',
};

export default null;
