import classNames from "classnames";

import "./GameStatistics.scss";

const GameStatistics = (props) => {
    const { className, elapsedTimer, countdownTimer } = props;

    return (
        <div className={`game-statistics ${classNames(className)}`}>
            <div className="game-statistics__item">
                <span className="game-statistics__item-value">10</span>
                <span className="game-statistics__item-text">ходов</span>
            </div>

            <div className="game-statistics__item">
                <span className="game-statistics__item-value">{elapsedTimer | countdownTimer}</span>
                <span className="game-statistics__item-text">Время</span>
            </div>
        </div>
    );
};

export { GameStatistics };
