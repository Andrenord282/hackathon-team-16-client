import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectGameFieldSize, selectGameСountdownTimer } from "store/gameSlice";
import { useToggleCardModal } from "./useToggleCardModal";
import { useCardHandler } from "./useCardHandler";

const cardsList = [
    { id: nanoid(5), src: "https://via.placeholder.com/150", descr: "Карта 1: Описание 1" },
    { id: nanoid(5), src: "https://via.placeholder.com/150", descr: "Карта 2: Описание 2" },
    { id: nanoid(5), src: "https://via.placeholder.com/150", descr: "Карта 3: Описание 3" },
    { id: nanoid(5), src: "https://via.placeholder.com/150", descr: "Карта 4: Описание 4" },
    { id: nanoid(5), src: "https://via.placeholder.com/150", descr: "Карта 5: Описание 5" },
];

const duplicatedCards = [
    ...cardsList,
    ...cardsList.map((card) => {
        return { ...card, id: nanoid(5) };
    }),
];

const shuffledCards = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

const cardsListСompiled = shuffledCards(duplicatedCards);

const useGameBoardState = () => {
    const gameFieldSize = useSelector(selectGameFieldSize);
    const gameСountdownTimer = useSelector(selectGameСountdownTimer);
    const [elapsedTimer, setElapsedTimer] = useState(0);
    const [countdownTimer, setCountdownTimer] = useState(0);
    const { isOpenCardModal, setIsOpenCardModal } = useToggleCardModal();
    const { firstCard, secondCard, winnerCardDescr, onClickFlipCard } = useCardHandler(setIsOpenCardModal);

    useEffect(() => {
        let intervalId;

        const updateElapsedTimer = () => {
            setElapsedTimer((prevElapsed) => prevElapsed + 1);
        };

        const updateCountdownTimer = () => {
            setCountdownTimer((prevCountdown) => prevCountdown - 1);
        };
        console.log(isOpenCardModal);
        if (!isOpenCardModal) {
            if (!gameСountdownTimer) {
                intervalId = setInterval(updateElapsedTimer, 1000);
            } else {
                setCountdownTimer(gameСountdownTimer * 60);
                intervalId = setInterval(updateCountdownTimer, 1000);
            }
        }

        return () => clearInterval(intervalId);
    }, [gameСountdownTimer, isOpenCardModal]);

    return {
        gameFieldSize,
        elapsedTimer,
        countdownTimer,
        cardsListСompiled,
        isOpenCardModal,
        setIsOpenCardModal,
        firstCard,
        secondCard,
        winnerCardDescr,
        onClickFlipCard,
    };
};

export { useGameBoardState };
