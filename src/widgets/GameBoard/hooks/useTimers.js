import { useEffect, useState } from "react";

const useTimers = (gameСountdownTimer, isOpenCardModal) => {
    const [elapsedTimer, setElapsedTimer] = useState(null);
    const [countdownTimer, setCountdownTimer] = useState(null);

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
                if (!countdownTimer) {
                    setCountdownTimer(gameСountdownTimer * 60);
                }
                intervalId = setInterval(updateCountdownTimer, 1000);
            }
        }

        return () => clearInterval(intervalId);
    }, [gameСountdownTimer, countdownTimer, isOpenCardModal]);

    return {
        elapsedTimer,
        countdownTimer,
        setElapsedTimer,
        setCountdownTimer,
    };
};

export { useTimers };
