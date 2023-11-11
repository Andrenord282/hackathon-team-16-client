import classNames from "classnames";

import "./GameStatistics.scss";

const GameStatistics = (props) => {
    const { className, movesCount, elapsedTimer, countdownTimer, gameСountdownTimer } = props;

    return (
        <div className={`game-statistics ${classNames(className)}`}>
            <div className="game-statistics__item">
                <span className="game-statistics__item-value">{movesCount}</span>
                <span className="game-statistics__item-text">ходов</span>
            </div>
            <div className="game-statistics__item">
                <span className="game-statistics__item-value">
                    {!countdownTimer && !elapsedTimer ? 0 : countdownTimer ? countdownTimer : elapsedTimer}
                </span>
                <span className="game-statistics__item-text">
                    {gameСountdownTimer ? "осталось времени" : "прошло времени"}{" "}
                </span>
            </div>
        </div>
    );
};

export { GameStatistics };
