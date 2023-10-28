import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  renderServices: [],
  filterByName: {},
};

const filtersHandler = createSlice({
  name: "filterServices",
  initialState,
  reducers: {
    setFilterByName: (state, action) => {
      state.filterByName = action.payload;
    },
    setRenderServices: (state, action) => {
      state.renderVideogames = action.payload;
    },
  },
});

export const getFilterByName = (state) => state.filterServices.filterByName;
export const getRenderServices = (state) => state.filterServices.renderServices;

export const {setFilterByName, setRenderServices} = filtersHandler.actions;

export default filtersHandler.reducer;
