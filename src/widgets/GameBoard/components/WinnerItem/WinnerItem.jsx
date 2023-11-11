import "./WinnerItem.scss";

const WinnerItem = (props) => {
    const { winnerCardDescr } = props;
    return (
        <div className="winner-item">
            <h3 className="winner-item__title">Я заголовок</h3>
            <p className="winner-item__text">{winnerCardDescr.descr}</p>
        </div>
    );
};

export { WinnerItem };
