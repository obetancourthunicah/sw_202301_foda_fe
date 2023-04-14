import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import secSlice from './slices/secSlice';
import { secApi } from './services/secServices';
import { empApi } from './services/empServices';

const preLoadedState = JSON.parse(localStorage.getItem('reduxState') || '{}');

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
  ]),
  preloadedState: preLoadedState
});

store.subscribe(() => {
  const { sec } = store.getState();
  localStorage.setItem('reduxState', JSON.stringify({ sec }));
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
