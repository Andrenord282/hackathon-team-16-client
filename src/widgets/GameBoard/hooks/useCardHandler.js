const { useState, useEffect } = require("react");

const useCardHandler = (setOpenCardModal) => {
    const [movesCount, setMovesCount] = useState(0);
    const [isActiveClick, setActiveClick] = useState(true);
    const [firstCard, setFirstCard] = useState({ id: null, descr: null });
    const [secondCard, setSecondCard] = useState({ id: null, descr: null });
    const [openedCardsList, setOpenedCardsList] = useState({});
    const [winnerCardDescr, setwinnerCardDescr] = useState({ id: null, descr: null });

    useEffect(() => {
        switch (true) {
            case firstCard.id && secondCard.id && firstCard.descr === secondCard.descr:
                setTimeout(() => {
                    setwinnerCardDescr({ id: firstCard.id, descr: firstCard.descr });
                    setOpenCardModal(true);
                    setMovesCount((prevCount) => prevCount + 1);
                    setOpenedCardsList({
                        ...openedCardsList,
                        [firstCard.id]: firstCard.id,
                        [secondCard.id]: secondCard.id,
                    });
                    setFirstCard({ id: null, descr: null });
                    setSecondCard({ id: null, descr: null });
                }, 800);

                break;
            case firstCard.id && secondCard.id && firstCard.descr !== secondCard.descr:
                setActiveClick(false);
                setTimeout(() => {
                    setFirstCard({ id: null, descr: null });
                    setSecondCard({ id: null, descr: null });
                    setActiveClick(true);
                    setMovesCount((prevCount) => prevCount + 1);
                }, 600);
                break;

            default:
                break;
        }
    }, [firstCard.id, secondCard.id, firstCard.descr, secondCard.descr, setOpenCardModal]);

    const onClickFlipCard = (e) => {
        if (!isActiveClick) return;
        const card = e.currentTarget;
        const id = card.dataset.btnId;
        const descr = card.dataset.btnDescr;

        if (!firstCard.id) {
            const data = {
                id,
                descr,
            };

            setFirstCard(data);
            return;
        }

        if (firstCard.id && firstCard.id !== id) {
            const data = {
                id,
                descr,
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
        winnerCardDescr,
        onClickFlipCard,
        setFirstCard,
        setSecondCard,
        setOpenedCardsList,
    };
};

export { useCardHandler };
