import { Link } from "react-router-dom";

import "./GameLosingModal.scss";

const GameLosingModal = (props) => {
    const { setOpenGameLosingModal, onClickResetGame } = props;

    return (
        <div className="game-losing-modal">
            <h3 className="game-losing-modal__title">Упс, время вышло</h3>
            <Link to={"/"} className="game-losing-modal__btn">
                Назад в меню
            </Link>
            <button
                className="game-losing-modal__btn"
                onClick={(e) => {
                    e.stopPropagation();
                    setOpenGameLosingModal(false);
                    onClickResetGame();
                }}
            >
                Новая игра
            </button>
        </div>
    );
};

export { GameLosingModal };
