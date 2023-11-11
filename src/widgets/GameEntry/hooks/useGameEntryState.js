import { useEffect, useState } from "react";
import { useGameContext } from "context/useGameContext";

const useGameEntryState = () => {
    const {
        player,
        gameFieldSize,
        gameСountdownTimer,
        handlerSetPlayer,
        handlerSetFieldSize,
        handlerSetGameСountdownTimer,
    } = useGameContext();
    const [activeStartBtn, setActiveStartBtn] = useState(false);

    useEffect(() => {
        if (!player) {
            setActiveStartBtn(false);
        } else {
            setActiveStartBtn(true);
        }
    }, [player]);

    const onChangeInput = (e) => {
        const inputValue = e.target.value;
        handlerSetPlayer(inputValue);
    };

    const onClickSetFieldSize = (e) => {
        const btn = e.target;
        const btnDataValue = JSON.parse(btn.dataset.btnValue);

        handlerSetFieldSize(btnDataValue);
    };

    const onClickSetCountdownTimere = (e) => {
        const btn = e.target;
        const btnDataValue = JSON.parse(btn.dataset.btnValue);
        handlerSetGameСountdownTimer(btnDataValue);
    };

    return {
        activeStartBtn,
        onChangeInput,
        onClickSetFieldSize,
        onClickSetCountdownTimere,
        player,
        gameFieldSize,
        gameСountdownTimer,
    };
};

export { useGameEntryState };
