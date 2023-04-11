import { configureStore } from '@reduxjs/toolkit';
import secSlice from './slices/secSlice';
export const store = configureStore({
  reducer: {
    sec: secSlice,
  }
});
