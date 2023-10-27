import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  token: null,
  email: "",
  name: "",
  lastname: "",
  location: null,
};
export const userHandler = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = null;
    },
    setAuthToken: (state, action) => {
      state.token = action.payload;
    },
    setMail: (state, action) => {
      state.email = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setLastName: (state, action) => {
      state.lastname = action.payload;
    },
    setLocation: (state, action) => {
      state.location = {
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      };
    },
  },
});

export const isLogged = (state) => state.user.isLoggedIn;
export const getToken = (state) => state?.user?.token;
export const getMail = (state) => state?.user?.email;
export const getName = (state) => state?.user?.name;
export const getLastName = (state) => state?.user?.lastname;
export const getLocation = (state) => state?.user?.location;

export const {
  login,
  logout,
  setAuthToken,
  setAuthId,
  setMail,
  setName,
  setLastName,
  setLocation,
} = userHandler.actions;

export default userHandler.reducer;
