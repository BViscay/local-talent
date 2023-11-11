import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ownMatches: [],
  myMatches: [],
  isMyMatches: true,
};

const matchesHandler = createSlice({
  name: "matches",
  initialState,
  reducers: {
    setOwnMatches: (state, action) => {
      state.ownMatches = action.payload;
    },
    setMyMatches: (state, action) => {
      state.myMatches = action.payload;
    },
    setIsMyMatches: (state, action) => {
      state.isMyMatches = action.payload;
    },
  },
});

export const getOwnMatches = (state) => state?.matches?.ownMatches;
export const getMyMatches = (state) => state?.matches?.myMatches;
export const getIsMyMatches = (state) => state?.matches?.isMyMatches;

export const { setOwnMatches, setMyMatches, setIsMyMatches } =
  matchesHandler.actions;
export default matchesHandler.reducer;
