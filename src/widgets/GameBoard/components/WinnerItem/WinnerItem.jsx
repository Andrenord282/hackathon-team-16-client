import "./WinnerItem.scss";

const WinnerItem = (props) => {
    const { winnerCardDescr, setOpenCardModal } = props;

    return (
        <div className="winner-item">
            <h3 className="winner-item__title">Я заголовок</h3>
            {/* <p className="winner-item__text">{winnerCardDescr.descr}</p> */}
            <p className="winner-item__text">
                Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности требуют от нас
                анализа дальнейших направлений развития. Задача организации, в особенности же начало повседневной работы
                по формированию позиции позволяет выполнять важные задания по разработке систем массового участия.
            </p>

            <button
                className="winner-item__btn"
                onClick={(e) => {
                    e.stopPropagation();
                    setOpenCardModal(false);
                }}
            >
                Продолжить
            </button>
        </div>
    );
};

export { WinnerItem };
