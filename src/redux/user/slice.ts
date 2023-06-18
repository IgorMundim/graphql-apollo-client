import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  currentUser: null;
}
const initialState = {
  currentUser: null,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state: UserState, action) => {
      state.currentUser = action.payload;
    },
    logout: (state: UserState) => {
      state.currentUser = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
