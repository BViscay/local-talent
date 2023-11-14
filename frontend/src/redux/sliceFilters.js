import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  renderServices: [],
  filteredServices: [],
  allServices: [],
  nearServices: [],
  myServices: [],
  serviceDetail: {},
};

const filtersHandler = createSlice({
  name: "filterServices",
  initialState,
  reducers: {
    setFilteredServices: (state, action) => {
      state.filteredServices = action.payload;
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
    setServiceDetail: (state, action) => {
      state.serviceDetail = action.payload;
    },
    setMyServices: (state, action) => {
      state.myServices = action.payload;
    },
  },
});

export const getFilteredServices = (state) =>
  state.filterServices.filteredServices;
export const getRenderServices = (state) => state.filterServices.renderServices;
export const getAllServices = (state) => state.filterServices.allServices;
export const getNearServices = (state) => state.filterServices.nearServices;
export const getDetailServices = (state) => state.filterServices.serviceDetail;
export const getMyServices = (state) => state.filterServices.myServices;

export const {
  setFilteredServices,
  setRenderServices,
  setAllServices,
  setNearServices,
  setServiceDetail,
  setMyServices,
} = filtersHandler.actions;

export default filtersHandler.reducer;
