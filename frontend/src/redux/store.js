import {configureStore} from "@reduxjs/toolkit";
import userHandler from "./sliceLogin";
import filtersHandler from "./sliceFilters";
import keysHandler from "./sliceKeys";
import matchesHandler from "./sliceMatches";

export const store = configureStore({
  reducer: {
    user: userHandler,
    filterServices: filtersHandler,
    keys: keysHandler,
    matches: matchesHandler,
  },
});
