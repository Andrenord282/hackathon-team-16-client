const { useState, useEffect } = require("react");

const useCardHandler = (setIsOpenCardModal) => {
    const [firstCard, setFirstCard] = useState({ id: null, descr: null });
    const [secondCard, setSecondCard] = useState({ id: null, descr: null });
    const [winnerCardDescr, setwinnerCardDescr] = useState({ id: null, descr: null });

    useEffect(() => {
        switch (true) {
            case firstCard.id && secondCard.id && firstCard.descr === secondCard.descr:
                setwinnerCardDescr({ id: firstCard.id, descr: firstCard.descr });
                setIsOpenCardModal(true);
                break;
            case firstCard.id && secondCard.id && firstCard.descr !== secondCard.descr:
                setTimeout(() => {
                    setFirstCard({ id: null, descr: null });
                    setSecondCard({ id: null, descr: null });
                }, 600);
                break;

            default:
                break;
        }
    }, [firstCard.id, secondCard.id, firstCard.descr, secondCard.descr, setIsOpenCardModal]);

    const onClickFlipCard = (e) => {
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
        firstCard,
        secondCard,
        winnerCardDescr,
        onClickFlipCard,
    };
};

export { useCardHandler };
