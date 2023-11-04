import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  ownMatches: [],
  myMatches: [],
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
  },
});

export const getOwnMatches = (state) => state?.matches?.ownMatches;
export const getMyMatches = (state) => state?.matches?.myMatches;

export const {setOwnMatches, setMyMatches} = matchesHandler.actions;
export default matchesHandler.reducer;
