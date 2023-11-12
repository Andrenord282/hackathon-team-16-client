import { useEffect, useState } from "react";

const useTimers = (gameСountdownTimer, isOpenCardModal) => {
    const [elapsedTimer, setElapsedTimer] = useState(null);
    const [countdownTimer, setCountdownTimer] = useState(null);

    useEffect(() => {
        let countdownTimerID;
        let elapsedTimerID;

        const updateElapsedTimer = () => {
            setElapsedTimer((prevElapsed) => prevElapsed + 1);
        };

        const updateCountdownTimer = () => {
            setCountdownTimer((prevCountdown) => prevCountdown - 1);
        };

        if (!isOpenCardModal) {
            elapsedTimerID = setInterval(updateElapsedTimer, 1000);
            if (gameСountdownTimer) {
                if (countdownTimer == null) {
                    setCountdownTimer(gameСountdownTimer * 60);
                } else if (countdownTimer === 0) {
                    clearInterval(countdownTimerID);
                } else {
                    countdownTimerID = setInterval(updateCountdownTimer, 1000);
                }
            }
        }

        return () => {
            clearInterval(countdownTimerID);
            clearInterval(elapsedTimerID);
        };
    }, [gameСountdownTimer, countdownTimer, isOpenCardModal]);

    return {
        elapsedTimer,
        countdownTimer,
        setElapsedTimer,
        setCountdownTimer,
    };
};

export { useTimers };
