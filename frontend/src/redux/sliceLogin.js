import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  token: null,
  email: "",
  name: "",
  lastname: "",
  image: null,
  notifications: null,
  countNotifications: null,
  rol: null,
  firstLoad: true,
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
      (state.email = ""),
        (state.name = ""),
        (state.lastname = ""),
        (state.location = null);
    },
    setAuthToken: (state, action) => {
      state.token = action.payload;
    },
    setFirstLoad: (state, action) => {
      state.firstLoad = action.payload;
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
    setImage: (state, action) => {
      state.image = action.payload;
    },
    setNotifications: (state, action) => {
      state.notifications = action.payload;
    },
    setCountNotifications: (state, action) => {
      state.countNotifications = action.payload;
    },
    setRol: (state, action) => {
      state.rol = action.payload;
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
export const getFirstLoad = (state) => state?.user?.firstLoad;
export const getMail = (state) => state?.user?.email;
export const getName = (state) => state?.user?.name;
export const getImage = (state) => state?.user?.image;
export const getNotifications = (state) => state?.user?.notifications;
export const getCountNotifications = (state) => state?.user?.countNotifications;
export const getRol = (state) => state?.user?.rol;
export const getLastName = (state) => state?.user?.lastname;
export const getLocation = (state) => state?.user?.location;

export const {
  login,
  logout,
  setAuthToken,
  setFirstLoad,
  setAuthId,
  setMail,
  setName,
  setLastName,
  setImage,
  setRol,
  setNotifications,
  setCountNotifications,
  setLocation,
} = userHandler.actions;

export default userHandler.reducer;
