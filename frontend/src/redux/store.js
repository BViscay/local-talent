import { configureStore } from "@reduxjs/toolkit";
import userHandler from "./sliceLogin";
import filtersHandler from "./sliceFilters";
import keysHandler from "./sliceKeys";
import matchesHandler from "./sliceMatches";
import usersHandler from "../redux/admin/sliceUsers"

export const store = configureStore({
    reducer: {
        user: userHandler,
        filterServices: filtersHandler,
        keys: keysHandler,
        matches: matchesHandler,
        users: usersHandler,
    },
});
