import { useGameContext } from "context/useGameContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const useCheckStatusGame = (
    gameState,
    openMatchedCardModal,
    cardsListСompiled,
    openedCardsList,
    countdownTimer,
    elapsedTimer,
    movesCount,
    setOpenGameLosingModal
) => {
    const navigate = useNavigate();
    const { handlerSetElapsedTimer, handlerSetMovesCount } = useGameContext();
    const [gameWinning, setGameWinning] = useState(false);

    useEffect(() => {
        if (gameState !== "loaded") return;

        const totalCardsLength = cardsListСompiled.length;
        const openedCardsLength = Object.keys(openedCardsList).length;

        if (totalCardsLength === openedCardsLength) {
            setGameWinning(true);
        }
    }, [cardsListСompiled, openedCardsList]);

    useEffect(() => {
        if (!openMatchedCardModal && gameWinning) {
            handlerSetElapsedTimer(elapsedTimer);
            handlerSetMovesCount(movesCount);
            setTimeout(() => {
                navigate("/game-win-page");
            }, 700);
        }
    }, [gameWinning, openMatchedCardModal]);

    useEffect(() => {
        if (countdownTimer === 0) {
            setOpenGameLosingModal(true);
        }
    }, [countdownTimer]);
};

export { useCheckStatusGame };
