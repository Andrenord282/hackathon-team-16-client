import { useGameContext } from "context/useGameContext";
import { formatTime } from "utilities/formatTime";
import { useWinFetch } from "./useWinFetch";

const useGameWinState = () => {
    const { player, elapsedTimer, movesCount } = useGameContext();
    useWinFetch(player, elapsedTimer, movesCount);

    return {
        player: player.charAt(0).toUpperCase() + player.slice(1),
        elapsedTimer: formatTime(elapsedTimer),
        movesCount,
    };
};

export { useGameWinState };
