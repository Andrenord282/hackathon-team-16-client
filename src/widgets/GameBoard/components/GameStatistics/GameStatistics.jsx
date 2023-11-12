import classNames from "classnames";
import { formatTime } from "utilities/formatTime";

import "./GameStatistics.scss";

const GameStatistics = (props) => {
    const { className, movesCount, elapsedTimer, countdownTimer, gameСountdownTimer } = props;

    const setRenderTimeType = (gameСountdownTimer, elapsedTimer, countdownTimer) => {
        if (gameСountdownTimer && !countdownTimer) {
            return formatTime(gameСountdownTimer * 60);
        }

        if (gameСountdownTimer && countdownTimer) {
            return formatTime(countdownTimer);
        }

        return formatTime(elapsedTimer);
    };

    return (
        <div className={`game-statistics ${classNames(className)}`}>
            <div className="game-statistics__item">
                <span className="game-statistics__item-value">{movesCount}</span>
                <span className="game-statistics__item-text">ходов</span>
            </div>
            <div className="game-statistics__item">
                <span className="game-statistics__item-value">
                    {setRenderTimeType(gameСountdownTimer, elapsedTimer, countdownTimer)}
                </span>
                <span className="game-statistics__item-text">
                    {gameСountdownTimer ? "осталось времени" : "прошло времени"}{" "}
                </span>
            </div>
        </div>
    );
};

export { GameStatistics };
