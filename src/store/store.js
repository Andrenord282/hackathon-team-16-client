import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { gameReducer } from "./gameSlice";

const rootReducer = combineReducers({
    game: gameReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
