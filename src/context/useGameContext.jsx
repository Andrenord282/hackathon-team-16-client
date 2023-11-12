import { useState, createContext, useContext } from "react";

const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
    const [player, setPlayer] = useState("");
    const [elapsedTimer, setElapsedTimer] = useState(null);
    const [movesCount, setMovesCount] = useState(0);
    const [gameFieldSize, setGameFieldSize] = useState(10);
    const [gameСountdownTimer, setGameСountdownTimer] = useState(false);

    const handlerSetPlayer = (newPlayer) => {
        setPlayer(newPlayer);
    };

    const handlerSetFieldSize = (value) => {
        setGameFieldSize(value);
    };

    const handlerSetGameСountdownTimer = (value) => {
        setGameСountdownTimer(value);
    };

    const handlerSetElapsedTimer = (value) => {
        setElapsedTimer(value);
    };

    const handlerSetMovesCount = (value) => {
        setMovesCount(value);
    };

    const gameContextValue = {
        player,
        gameFieldSize,
        gameСountdownTimer,
        elapsedTimer,
        movesCount,
        handlerSetPlayer,
        handlerSetFieldSize,
        handlerSetGameСountdownTimer,
        handlerSetElapsedTimer,
        handlerSetMovesCount,
    };

    return <GameContext.Provider value={gameContextValue}>{children}</GameContext.Provider>;
};

export const useGameContext = () => {
    return useContext(GameContext);
};
