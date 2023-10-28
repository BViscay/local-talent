import {configureStore} from "@reduxjs/toolkit";
import userHandler from "./sliceLogin";
import filtersHandler from "./sliceFilters";

export const store = configureStore({
  reducer: {
    user: userHandler,
    filterServices: filtersHandler,
  },
});
