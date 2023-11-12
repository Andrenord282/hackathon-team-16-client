import { setNameTag } from "utilities/setNameTag";
import { useEffect, useState, useRef } from "react";
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
    const [userNameInput, setUserNameInput] = useState("");
    const userNameInputRef = useRef(null);

    useEffect(() => {
        if (!player) {
            setActiveStartBtn(false);
        } else {
            setActiveStartBtn(true);
        }
    }, [player]);

    useEffect(() => {
        if (userNameInput.length > 5 && /#\d\d\d\d$/.test(userNameInput)) {
            const cursor = userNameInput.length - 5;
            userNameInputRef.current.selectionStart = userNameInputRef.current.selectionEnd = cursor;
        } else {
            const cursor = userNameInput.length;
            userNameInputRef.current.selectionStart = userNameInputRef.current.selectionEnd = cursor;
        }
    }, [userNameInput]);

    const onChangeInput = (e) => {
        let inputValue = e.target.value;

        if (!inputValue.includes("#")) {
            inputValue = `${inputValue}${setNameTag(4)}`;
        }
        setUserNameInput(inputValue);
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
        userNameInputRef,
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
