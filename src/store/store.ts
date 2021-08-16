import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/dist/query';

import {appSlice} from './appReducer';
import {baseApi} from './rtkqStore';

const reducerMap = {
  [baseApi.reducerPath]: baseApi.reducer,
  app: appSlice.reducer,
};

const rootReducer = combineReducers(reducerMap);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

setupListeners(store.dispatch);

export type TStore = typeof store;
export type TCommonState = ReturnType<typeof rootReducer>;
export type TAppDispatch = typeof store.dispatch;
