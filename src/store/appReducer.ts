import {createSlice} from '@reduxjs/toolkit';

// общие данные для всего приложения
export interface IAppState {}

const initialState: IAppState = {};

export const appSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
  },
});

// actions
// export const {} = appSlice.actions;
