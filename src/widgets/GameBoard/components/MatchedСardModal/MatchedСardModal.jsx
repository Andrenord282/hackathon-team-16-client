import "./MatchedСardModal.scss";

const MatchedСardModal = (props) => {
    const { winnerCardDescr, setOpenMatchedCardModal } = props;

    return (
        <div className="matched-card-modal">
            <h3 className="matched-card-modal__title">Я заголовок</h3>
            {/* <p className="winner-item__text">{winnerCardDescr.descr}</p> */}
            <p className="matched-card-modal__text">
                Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности требуют от нас
                анализа дальнейших направлений развития. Задача организации, в особенности же начало повседневной работы
                по формированию позиции позволяет выполнять важные задания по разработке систем массового участия.
            </p>

            <button
                className="matched-card-modal__btn"
                onClick={(e) => {
                    e.stopPropagation();
                    setOpenMatchedCardModal(false);
                }}
            >
                Продолжить
            </button>
        </div>
    );
};

export { MatchedСardModal };
