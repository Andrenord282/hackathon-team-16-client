import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import { gameActions } from "store/gameSlice";

const useGameEntry = () => {
    const dispatch = useDispatch();
    const [activeStartBtn, setActiveStartBtn] = useState(false);
    const [userName, setUserName] = useState("");
    const [fieldSize, setFieldSize] = useState(4);
    const [countdownTimer, setCountdownTimer] = useState(false);

    useEffect(() => {
        if (!userName) {
            setActiveStartBtn(false);
        } else {
            setActiveStartBtn(true);
        }
    }, [userName]);

    const onChangeInput = (e) => {
        const inputValue = e.target.value;
        setUserName(inputValue);

        const data = {
            userName: inputValue,
        };

        dispatch(gameActions.setUserName(data));
    };

    const onClickSetFieldSize = (e) => {
        const btn = e.target;
        const btnDataValue = JSON.parse(btn.dataset.btnValue);

        setFieldSize(btnDataValue);

        const data = {
            fieldSize: btnDataValue,
        };

        dispatch(gameActions.setGameFieldSize(data));
    };

    const onClickSetCountdownTimere = (e) => {
        const btn = e.target;
        const btnDataValue = JSON.parse(btn.dataset.btnValue);

        setCountdownTimer(btnDataValue);

        const data = {
            countdownTimer: btnDataValue,
        };

        dispatch(gameActions.setGameСountdownTimer(data));
    };

    return {
        activeStartBtn,
        onChangeInput,
        onClickSetFieldSize,
        onClickSetCountdownTimere,
        userName,
        fieldSize,
        countdownTimer,
    };
};

export { useGameEntry };
