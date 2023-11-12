import { Link } from "react-router-dom";

import "./GameAboutUs.scss";

const GameAboutUs = () => {
    return (
        <div className="game-about-us">
            <div className="game-about-us__content">
                <div className="game-about-us__head">
                    <div className="game-about-us__head-descr">
                        <Link to={"/"} className="game-about-us__link">
                            <h2 className="game-about-us__title">Memory Game</h2>
                        </Link>
                        <Link to={"/game-rating"} className="game-about-us__link">
                            Рейтинг
                        </Link>
                        <Link to={"/game-about-us"} className="game-about-us__link">
                            О проекте
                        </Link>
                    </div>
                </div>
                <div className="game-about-us__body">
                    <p> Карточная игра, где нужно попарно открыть все карточки за наименьшее количество ходов.</p>
                </div>
            </div>
        </div>
    );
};

export { GameAboutUs };
