import { Link } from "react-router-dom";
import { useGameWinState } from "./hooks/useGameWinState";

import "./GameWin.scss";

const GameWin = () => {
    const { player, elapsedTimer, movesCount } = useGameWinState();

    return (
        <div className="game-win">
            <div className="game-win__content">
                <h1 className="game-win__title">
                    {" "}
                    {player}, <br /> Поздравляем! <br /> Игра окончена
                </h1>
                <div className="game-win__statistics">
                    <div className="game-win__statistics-item">
                        <span className="game-win__statistics-item-value">{elapsedTimer}</span>
                        <span className="game-win__statistics-item-text">
                            Вермя <br /> игры
                        </span>
                    </div>
                    <div className="game-win__statistics-item">
                        <span className="game-win__statistics-item-value">{movesCount}</span>
                        <span className="game-win__statistics-item-text">
                            Количество <br />
                            ходов
                        </span>
                    </div>
                </div>
                <Link to={"/"} className="game-win____btn">
                    Назад в меню
                </Link>
                <Link to={"/game-board"} className="game-win____btn">
                    Новая игра
                </Link>
            </div>
        </div>
    );
};

export { GameWin };
