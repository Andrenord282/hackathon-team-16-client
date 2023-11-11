import classNames from "classnames";
import { Link } from "react-router-dom";
import { useGameEntry } from "./hooks/useGameEntry";

import "./GameEntry.scss";

const GameEntry = () => {
    const { onChangeInput, onClickSetFieldSize, onClickSetCountdownTimere, userName, fieldSize, countdownTimer } =
        useGameEntry();

    return (
        <div className="game-entry">
            <div className="game-entry__content">
                <h1 className="game-entry__title">Memory Game</h1>
                <div className="game-entry__descr">
                    Карточная игра, где нужно попарно открыть все карточки за наименьшее количество ходов.
                </div>
                <div className="game-entry__setting">
                    <div className="game-entry__setting-set-user">
                        <span className="game-entry__setting-subtitle">Как тебя называть?</span>
                        <input
                            value={userName}
                            onChange={onChangeInput}
                            type="text"
                            className="game-entry__setting-input"
                        />
                    </div>
                    <div className="game-entry__setting-set-game">
                        <div className="game-entry__setting-set-game-item">
                            <span className="game-entry__setting-subtitle">Количество карточек</span>
                            <button
                                aria-label="set-field-size"
                                data-btn-value={4}
                                onClick={onClickSetFieldSize}
                                className={classNames("game-entry__setting-label-btn", { active: fieldSize === 4 })}
                            >
                                10
                            </button>
                            <button
                                aria-label="set-field-size"
                                data-btn-value={5}
                                onClick={onClickSetFieldSize}
                                className={classNames("game-entry__setting-label-btn", { active: fieldSize === 5 })}
                            >
                                12
                            </button>
                            <button
                                aria-label="set-field-size"
                                data-btn-value={6}
                                onClick={onClickSetFieldSize}
                                className={classNames("game-entry__setting-label-btn", { active: fieldSize === 6 })}
                            >
                                14
                            </button>
                        </div>
                        <div className="game-entry__setting-set-game-item">
                            <span className="game-entry__setting-subtitle">Игра на время</span>
                            <button
                                aria-label="set-countdown-timer"
                                data-btn-value={false}
                                onClick={onClickSetCountdownTimere}
                                className={classNames("game-entry__setting-label-btn", {
                                    active: countdownTimer === false,
                                })}
                            >
                                Нет
                            </button>
                            <button
                                aria-label="set-countdown-timer"
                                data-btn-value={3}
                                onClick={onClickSetCountdownTimere}
                                className={classNames("game-entry__setting-label-btn", {
                                    active: countdownTimer === 3,
                                })}
                            >
                                3 мин
                            </button>
                            <button
                                aria-label="set-countdown-timer"
                                data-btn-value={5}
                                onClick={onClickSetCountdownTimere}
                                className={classNames("game-entry__setting-label-btn", {
                                    active: countdownTimer === 5,
                                })}
                            >
                                5 мин
                            </button>
                        </div>
                    </div>
                </div>
                <Link to={"/game"} className="game-entry__btn">
                    Начать игру
                </Link>
            </div>
        </div>
    );
};

export { GameEntry };