import { useFetch } from "hooks/useFetch";

const useWinFetch = (player, elapsedTimer, movesCount) => {
    const { postFetch } = useFetch();

    const body = {
        player: player,
        time_taken: elapsedTimer,
        moves_taken: movesCount,
    };

    postFetch("games/9/end_game/", body); // тут вмето 9 должен быть айдишник с игрой, не успели сделать
};

export { useWinFetch };
