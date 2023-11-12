import { shuffled } from "utilities/shuffled";
import { nanoid } from "@reduxjs/toolkit";
import { useGameContext } from "context/useGameContext";
import { useEffect, useState } from "react";
import { useFetch } from "hooks/useFetch";
import { useTimers } from "./useTimers";
import { useToggleMatchedCardModal } from "./useToggleMatchedCardModal";
import { useCardHandler } from "./useCardHandler";
import { useResetGame } from "./useResetGame";
import { useCheckStatusGame } from "./useCheckStatusGame";
import { useToggleGameLosingModal } from "./useToggleGameLosingModal";

const useGameBoardState = () => {
    const { player, gameFieldSize, gameСountdownTimer } = useGameContext();
    const { postFetch, getFetch } = useFetch();
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
        winnerCardDescr,
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
            const cardListFetch = async () => {
                const body = { player, cards_quantity: gameFieldSize };

                const cardList = await postFetch(
                    "https://www.toptal.com/developers/postbin/1699728673203-7364212437532",
                    "games",
                    body
                );
            };

            const cardsList = [
                { id: nanoid(5), src: "https://via.placeholder.com/150", descr: "Карта 1: Описание 1" },
                { id: nanoid(5), src: "https://via.placeholder.com/150", descr: "Карта 2: Описание 2" },
                // { id: nanoid(5), src: "https://via.placeholder.com/150", descr: "Карта 3: Описание 3" },
                // { id: nanoid(5), src: "https://via.placeholder.com/150", descr: "Карта 4: Описание 4" },
                // { id: nanoid(5), src: "https://via.placeholder.com/150", descr: "Карта 5: Описание 5" },
                // { id: nanoid(5), src: "https://via.placeholder.com/150", descr: "Карта 6: Описание 6" },
                // { id: nanoid(5), src: "https://via.placeholder.com/150", descr: "Карта 7: Описание 7" },
                // { id: nanoid(5), src: "https://via.placeholder.com/150", descr: "Карта 8: Описание 8" },
                // { id: nanoid(5), src: "https://via.placeholder.com/150", descr: "Карта 9: Описание 9" },
            ];
            const duplicatedCards = [
                ...cardsList,
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
        winnerCardDescr,
        onClickFlipCard,
        onClickResetGame,
    };
};

export { useGameBoardState };
