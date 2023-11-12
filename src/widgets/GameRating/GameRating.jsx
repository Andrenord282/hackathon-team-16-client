import { Link } from "react-router-dom";

import "./GameRating.scss";

const GameRating = () => {
    return (
        <div className="game-rating">
            <div className="game-rating__content">
                <div className="game-rating__head">
                    <div className="game-rating__head-descr">
                        <Link to={"/"} className="game-rating__link-title">
                            <h2 className="game-rating__title">Memory Game</h2>
                        </Link>
                        <Link to={"/game-rating"} className="game-rating__link">
                            Рейтинг
                        </Link>
                        <Link to={"/game-about-us"} className="game-rating__link">
                            О проекте
                        </Link>
                    </div>
                </div>
                <div className="game-rating__body"></div>
            </div>
        </div>
    );
};

export { GameRating };
