import { shuffled } from "utilities/shuffled";
import { nanoid } from "@reduxjs/toolkit";
import { useGameContext } from "context/useGameContext";
import { useEffect, useState } from "react";
import { useTimers } from "./useTimers";
import { useToggleMatchedCardModal } from "./useToggleMatchedCardModal";
import { useCardHandler } from "./useCardHandler";
import { useResetGame } from "./useResetGame";
import { useCheckStatusGame } from "./useCheckStatusGame";
import { useToggleGameLosingModal } from "./useToggleGameLosingModal";
import { cardList } from "utilities/data";

const useGameBoardState = () => {
    const { player, gameFieldSize, gameСountdownTimer } = useGameContext();
    const [gameState, setGameState] = useState("init"); // init | reset | loaded
    const { openMatchedCardModal, setOpenMatchedCardModal } = useToggleMatchedCardModal();
    const { openGameLosingModal, setOpenGameLosingModal } = useToggleGameLosingModal();
    const { elapsedTimer, countdownTimer, setElapsedTimer, setCountdownTimer } = useTimers(
        gameСountdownTimer,
        openMatchedCardModal
    );
    const [cardsListСompiled, setCardsListСompiled] = useState([]);

    const {
        movesCount,
        setMovesCount,
        firstCard,
        secondCard,
        openedCardsList,
        mathetCardDescr,
        onClickFlipCard,
        setFirstCard,
        setSecondCard,
        setOpenedCardsList,
    } = useCardHandler(setOpenMatchedCardModal);

    const { onClickResetGame } = useResetGame(
        gameState,
        setGameState,
        gameСountdownTimer,
        setElapsedTimer,
        setCountdownTimer,
        setMovesCount,
        setFirstCard,
        setSecondCard,
        setOpenedCardsList
    );

    useCheckStatusGame(
        gameState,
        openMatchedCardModal,
        cardsListСompiled,
        openedCardsList,
        countdownTimer,
        elapsedTimer,
        movesCount,
        setOpenGameLosingModal
    );

    useEffect(() => {
        if (gameState === "init" || gameState === "reset") {
            const cardsList = cardList.slice(0, gameFieldSize / 2);

            const duplicatedCards = [
                ...cardsList.map((card) => {
                    return { ...card, id: nanoid(5) };
                }),
                ...cardsList.map((card) => {
                    return { ...card, id: nanoid(5) };
                }),
            ];

            const cardsListСompiled = shuffled(duplicatedCards);
            setCardsListСompiled(cardsListСompiled);

            setGameState("loaded");
        }
    }, [gameState]);

    return {
        gameFieldSize,
        gameСountdownTimer,
        elapsedTimer,
        countdownTimer,
        cardsListСompiled,
        openMatchedCardModal,
        setOpenMatchedCardModal,
        openGameLosingModal,
        setOpenGameLosingModal,
        movesCount,
        firstCard,
        secondCard,
        openedCardsList,
        mathetCardDescr,
        onClickFlipCard,
        onClickResetGame,
        player,
    };
};

export { useGameBoardState };
