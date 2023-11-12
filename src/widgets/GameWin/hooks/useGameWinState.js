import { useGameContext } from "context/useGameContext";
import { formatTime } from "utilities/formatTime";

const useGameWinState = () => {
    const { player, elapsedTimer, movesCount } = useGameContext();

    return {
        player: player.charAt(0).toUpperCase() + player.slice(1),
        elapsedTimer: formatTime(elapsedTimer),
        movesCount,
    };
};

export { useGameWinState };
