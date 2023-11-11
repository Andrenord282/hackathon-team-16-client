import { useState } from "react";
import { useSelector } from "react-redux";
import { selectGameFieldSize } from "store/gameSlice";



const useGameBoardState = () => {
    const gameFieldSize = useSelector(selectGameFieldSize);
    return {
        gameFieldSize,
    };
};

export { useGameBoardState };
