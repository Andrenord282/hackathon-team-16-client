import classNames from "classnames";

import "./GameStatistics.scss";

const GameStatistics = (props) => {
    const { className } = props;

    return (
        <div className={`game-statistics ${classNames(className)}`}>
            <div className="game-statistics__item">
                <span className="game-statistics__item-value">10</span>
                <span className="game-statistics__item-text">ходов</span>
            </div>
            <div className="game-statistics__item">
                <span className="game-statistics__item-value">0:49</span>
                <span className="game-statistics__item-text">время</span>
            </div>
        </div>
    );
};

export { GameStatistics };
