import {configureStore} from "@reduxjs/toolkit";
import userHandler from "./sliceLogin";
import filtersHandler from "./sliceFilters";
import keysHandler from "./sliceKeys";

export const store = configureStore({
  reducer: {
    user: userHandler,
    filterServices: filtersHandler,
    keys: keysHandler,
  },
});
