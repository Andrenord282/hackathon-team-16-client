import { shuffled } from "utilities/shuffled";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectGameFieldSize, selectGameСountdownTimer } from "store/gameSlice";
import { useToggleCardModal } from "./useToggleCardModal";
import { useCardHandler } from "./useCardHandler";

const useGameBoardState = () => {
    const gameFieldSize = useSelector(selectGameFieldSize);
    const gameСountdownTimer = useSelector(selectGameСountdownTimer);
    const [gameState, setGameState] = useState("init"); // init | reset | loaded
    const [elapsedTimer, setElapsedTimer] = useState(0);
    const [countdownTimer, setCountdownTimer] = useState(0);
    const { isOpenCardModal, setOpenCardModal } = useToggleCardModal();
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
    } = useCardHandler(setOpenCardModal);
    
    useEffect(() => {
        if (gameState === "loaded") {
            return;
        }

        const cardsList = [
            { id: nanoid(5), src: "https://via.placeholder.com/150", descr: "Карта 1: Описание 1" },
            { id: nanoid(5), src: "https://via.placeholder.com/150", descr: "Карта 2: Описание 2" },
            { id: nanoid(5), src: "https://via.placeholder.com/150", descr: "Карта 3: Описание 3" },
            { id: nanoid(5), src: "https://via.placeholder.com/150", descr: "Карта 4: Описание 4" },
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
    }, [gameState]);

    const onClickResetGame = () => {
        setGameState("reset");
    };

    useEffect(() => {
        if (gameState === "reset") {
            setElapsedTimer(0);
            setCountdownTimer(0);
            setMovesCount(0);
            setFirstCard({ id: null, descr: null });
            setSecondCard({ id: null, descr: null });
            setOpenedCardsList({});
        }
    }, [gameState]);

    useEffect(() => {
        let intervalId;

        const updateElapsedTimer = () => {
            setElapsedTimer((prevElapsed) => prevElapsed + 1);
        };

        const updateCountdownTimer = () => {
            setCountdownTimer((prevCountdown) => prevCountdown - 1);
        };
        if (!isOpenCardModal) {
            if (!gameСountdownTimer) {
                intervalId = setInterval(updateElapsedTimer, 1000);
            } else {
                setCountdownTimer(gameСountdownTimer * 60);
                intervalId = setInterval(updateCountdownTimer, 1000);
            }
        }

        return () => clearInterval(intervalId);
    }, [gameСountdownTimer, isOpenCardModal, elapsedTimer, countdownTimer]);

    return {
        gameFieldSize,
        gameСountdownTimer,
        elapsedTimer,
        countdownTimer,
        cardsListСompiled,
        isOpenCardModal,
        setOpenCardModal,
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
