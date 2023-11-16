import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newCategory: [],
};

const newCategoryHandler = createSlice({
  name: "newCategory",
  initialState,
  reducers: {
    setNewCategory: (state, action) => {
      state.newCategory = action.payload;
    },
  },
});

export const getNewCategory = (state) => state.newCategory;

export const { setNewCategory } = newCategoryHandler.actions;

export default newCategoryHandler.reducer;
