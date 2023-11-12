import classNames from "classnames";
import { Link } from "react-router-dom";
import { useGameEntryState } from "./hooks/useGameEntryState";

import "./GameEntry.scss";

const GameEntry = () => {
    const {
        userNameInputRef,
        activeStartBtn,
        onChangeInput,
        onClickSetFieldSize,
        onClickSetCountdownTimere,
        player,
        gameFieldSize,
        gameСountdownTimer,
    } = useGameEntryState();

    const setClassActivStartBtn = classNames({ active: activeStartBtn });

    return (
        <div className="game-entry">
            <div className="game-entry__content">
                <h1 className="game-entry__title">Memory Game</h1>
                <div className="game-entry__descr">
                    Карточная игра, где нужно попарно открыть все карточки за наименьшее количество ходов.
                </div>
                <div className="game-entry__setting">
                    <div className="game-entry__setting-set-user">
                        <span className="game-entry__setting-subtitle">Ник или имя</span>
                        <input
                            ref={userNameInputRef}
                            value={player}
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
                                data-btn-value={10}
                                onClick={onClickSetFieldSize}
                                className={classNames("game-entry__setting-label-btn", {
                                    active: gameFieldSize === 10,
                                })}
                            >
                                10
                            </button>
                            <button
                                aria-label="set-field-size"
                                data-btn-value={14}
                                onClick={onClickSetFieldSize}
                                className={classNames("game-entry__setting-label-btn", {
                                    active: gameFieldSize === 14,
                                })}
                            >
                                14
                            </button>
                            <button
                                aria-label="set-field-size"
                                data-btn-value={18}
                                onClick={onClickSetFieldSize}
                                className={classNames("game-entry__setting-label-btn", {
                                    active: gameFieldSize === 18,
                                })}
                            >
                                18
                            </button>
                        </div>
                        <div className="game-entry__setting-set-game-item">
                            <span className="game-entry__setting-subtitle">Игра на время</span>
                            <button
                                aria-label="set-countdown-timer"
                                data-btn-value={false}
                                onClick={onClickSetCountdownTimere}
                                className={classNames("game-entry__setting-label-btn", {
                                    active: gameСountdownTimer === false,
                                })}
                            >
                                Нет
                            </button>
                            <button
                                aria-label="set-countdown-timer"
                                data-btn-value={3}
                                onClick={onClickSetCountdownTimere}
                                className={classNames("game-entry__setting-label-btn", {
                                    active: gameСountdownTimer === 3,
                                })}
                            >
                                3 мин
                            </button>
                            <button
                                aria-label="set-countdown-timer"
                                data-btn-value={5}
                                onClick={onClickSetCountdownTimere}
                                className={classNames("game-entry__setting-label-btn", {
                                    active: gameСountdownTimer === 5,
                                })}
                            >
                                5 мин
                            </button>
                        </div>
                    </div>
                </div>
                <Link to={"/game-board"} className={`game-entry__btn ${setClassActivStartBtn}`}>
                    Играть
                </Link>
                {/* <div className="game-entry__footer">
                    <Link to={"/game-rating"} className="game-entry__footer-link">
                        Рейтинг
                    </Link>
                    <Link to={"/game-about-us"} className="game-entry__footer-link">
                        O нас
                    </Link>
                </div> */}
            </div>
        </div>
    );
};

export { GameEntry };
