import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName: "Andre",
    gameFieldSize: 12, // 10 | 12 | 14
    gameСountdownTimer: false, // false | 3 | 5 | 10
};

const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        setUserName: (state, action) => {
            const { userName } = action.payload;
            state.userName = userName;
        },

        setGameFieldSize: (state, action) => {
            const { fieldSize } = action.payload;
            state.gameFieldSize = fieldSize;
        },

        setGameСountdownTimer: (state, action) => {
            const { countdownTimer } = action.payload;
            state.gameСountdownTimer = countdownTimer;
        },
    },
});

export const { actions: gameActions } = gameSlice;
export const { reducer: gameReducer } = gameSlice;
