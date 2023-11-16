import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  categories: []
};

const categoriesHandler = createSlice({
  name: "categoriesHandler",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload
    }
  }
});

export const getCategories = (state) => state.categories;

export const { setCategories } = categoriesHandler.actions;

export default categoriesHandler.reducer