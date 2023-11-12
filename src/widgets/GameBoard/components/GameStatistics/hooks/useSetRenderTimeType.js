import { formatTime } from "utilities/formatTime";

const useSetRenderTimeType = () => {
    const setRenderTimeType = (gameСountdownTimer, elapsedTimer, countdownTimer) => {
        if (gameСountdownTimer && countdownTimer === null) {
            return formatTime(gameСountdownTimer * 60);
        }

        if (gameСountdownTimer && countdownTimer === 0) {
            return "0:00";
        }

        if (gameСountdownTimer && countdownTimer) {
            return formatTime(countdownTimer);
        }

        return formatTime(elapsedTimer);
    };

    return {
        setRenderTimeType,
    };
};

export { useSetRenderTimeType };
