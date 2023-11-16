import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: []
}

const usersHandler = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setAllUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const getAllUsers = (state) => state.users;

export const { setAllUsers } = usersHandler.actions;

export default usersHandler.reducer;
