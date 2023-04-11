import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SecState {
  name: string;
  email: string;
  token: string;
  _id: string;
}

const initialState: SecState = {
  name: '',
  email: '',
  token: '',
  _id: ''
}

export const secSlice = createSlice({
  name: 'sec',
  initialState,
  reducers: {
    setSec: (state, action: PayloadAction<SecState>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state._id = action.payload._id;
    },
    clearSec: (state) => {
      state.name = '';
      state.email = '';
      state.token = '';
      state._id = '';
    }
  }
});
export const {setSec, clearSec} = secSlice.actions;
export default secSlice.reducer;
