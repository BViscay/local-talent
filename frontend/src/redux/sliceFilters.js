import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  renderServices: [],
  filterByName: {},
  allServices: [],
  nearServices:[],
};

const filtersHandler = createSlice({
  name: "filterServices",
  initialState,
  reducers: {
    setFilterByName: (state, action) => {
      state.filterByName = action.payload;
    },
    setRenderServices: (state, action) => {
      state.renderServices = action.payload;
    },
    setAllServices: (state, action) => {
      state.allServices = action.payload;
    },
    setNearServices: (state, action) => {
      state.nearServices = action.payload;
    },
  },
});

export const getFilterByName = (state) => state.filterServices.filterByName;
export const getRenderServices = (state) => state.filterServices.renderServices;
export const getAllServices = (state) => state.filterServices.allServices;
export const getNearServices = (state) => state.filterServices.nearServices;

export const {setFilterByName, setRenderServices, setAllServices, setNearServices} = filtersHandler.actions;

export default filtersHandler.reducer;
