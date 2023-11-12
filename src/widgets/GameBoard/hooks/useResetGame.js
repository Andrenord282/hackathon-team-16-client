import { useEffect } from "react";

const useResetGame = (
    gameState,
    setGameState,
    gameСountdownTimer,
    setElapsedTimer,
    setCountdownTimer,
    setMovesCount,
    setFirstCard,
    setSecondCard,
    setOpenedCardsList
) => {
    useEffect(() => {
        if (gameState === "reset") {
            setElapsedTimer(0);
            if (gameСountdownTimer) {
                setCountdownTimer(gameСountdownTimer * 60);
            }
            setMovesCount(0);
            setFirstCard({ id: null, descr: null });
            setSecondCard({ id: null, descr: null });
            setOpenedCardsList({});
        }
    }, [gameState]);

    const onClickResetGame = () => {
        setGameState("reset");
    };

    return {
        onClickResetGame,
    };
};

export { useResetGame };
