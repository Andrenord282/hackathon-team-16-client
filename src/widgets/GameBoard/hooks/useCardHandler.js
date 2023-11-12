const { useState, useEffect } = require("react");

const useCardHandler = (setOpenCardModal) => {
    const [movesCount, setMovesCount] = useState(0);
    const [isActiveClick, setActiveClick] = useState(true);
    const [firstCard, setFirstCard] = useState({ id: null, name: null });
    const [secondCard, setSecondCard] = useState({ id: null, name: null });
    const [openedCardsList, setOpenedCardsList] = useState({});
    const [mathetCardDescr, setMathesCardDescr] = useState({ id: null, name: null });

    useEffect(() => {
        switch (true) {
            case firstCard.id && secondCard.id && firstCard.name === secondCard.name:
                setTimeout(() => {
                    setMathesCardDescr({
                        id: firstCard.id,
                        name: firstCard.name,
                    });
                    setOpenCardModal(true);
                    setMovesCount((prevCount) => prevCount + 1);
                    setOpenedCardsList({
                        ...openedCardsList,
                        [firstCard.name]: firstCard.name,
                        [secondCard.name]: secondCard.name,
                    });
                    setFirstCard({ name: null });
                    setSecondCard({ name: null });
                }, 800);

                break;
            case firstCard.id && secondCard.id && firstCard.name !== secondCard.name:
                setActiveClick(false);
                setTimeout(() => {
                    setFirstCard({ id: null, name: null });
                    setSecondCard({ id: null, name: null });
                    setActiveClick(true);
                    setMovesCount((prevCount) => prevCount + 1);
                }, 600);
                break;

            default:
                break;
        }
    }, [firstCard.id, firstCard.name, secondCard.id, secondCard.name, setOpenCardModal]);

    const onClickFlipCard = (e) => {
        if (!isActiveClick) return;
        const card = e.currentTarget;
        const id = card.dataset.btnId;
        const name = card.dataset.btnName;

        if (!firstCard.id) {
            const data = {
                id,
                name,
            };

            setFirstCard(data);
            return;
        }

        if (firstCard.id && firstCard.id !== id) {
            const data = {
                id,
                name,
            };

            setSecondCard(data);
            return;
        }
    };

    return {
        movesCount,
        setMovesCount,
        firstCard,
        secondCard,
        openedCardsList,
        mathetCardDescr,
        onClickFlipCard,
        setFirstCard,
        setSecondCard,
        setOpenedCardsList,
    };
};

export { useCardHandler };
