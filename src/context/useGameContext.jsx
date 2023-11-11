import { useState, createContext, useContext } from "react";

const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
    const [player, setPlayer] = useState("");
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

    const gameContextValue = {
        player,
        gameFieldSize,
        gameСountdownTimer,
        handlerSetPlayer,
        handlerSetFieldSize,
        handlerSetGameСountdownTimer,
    };

    return <GameContext.Provider value={gameContextValue}>{children}</GameContext.Provider>;
};

export const useGameContext = () => {
    return useContext(GameContext);
};
