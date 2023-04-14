import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import secSlice from './slices/secSlice';
import { secApi } from './services/secServices';
import { empApi } from './services/empServices';
export const store = configureStore({
  reducer: {
    sec: secSlice,
    [secApi.reducerPath]: secApi.reducer,
    [empApi.reducerPath]: empApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      secApi.middleware,
      empApi.middleware
  ])
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
