import { formatTime } from "utilities/formatTime";

const useSetRenderTimeType = () => {
    const setRenderTimeType = (gameСountdownTimer, elapsedTimer, countdownTimer) => {
        if (gameСountdownTimer && !countdownTimer) {
            return formatTime(gameСountdownTimer * 60);
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
