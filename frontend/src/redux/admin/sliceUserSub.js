import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userSub: []
}

const userSubHandler = createSlice({
  name: 'userSub',
  initialState,
  reducers: {
    setSubUser: (state, action) => {
      state.userSub = action.payload
    }
  }
});

export const getUserSub = (state) => state.userSub;

export const {setSubUser} = userSubHandler.actions;

export default userSubHandler.reducer;