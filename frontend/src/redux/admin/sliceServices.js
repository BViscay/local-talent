import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  services: [],
};

const servicesHandler = createSlice({
  name: "services",
  initialState,
  reducers: {
    setServices: (state, action) => {
      state.services = action.payload;
    },
  },
});

export const getAlServices = (state) => state.services;

export const { setServices } = servicesHandler.actions;

export default servicesHandler.reducer;
