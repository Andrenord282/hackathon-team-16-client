import classNames from "classnames";
import { useSetRenderTimeType } from "./hooks/useSetRenderTimeType";

import "./GameStatistics.scss";

const GameStatistics = (props) => {
    const { className, player, movesCount, elapsedTimer, countdownTimer, gameСountdownTimer } = props;
    const { setRenderTimeType } = useSetRenderTimeType();

    return (
        <div className={`game-statistics ${classNames(className)}`}>
            <div className="game-statistics__item">
                <span className="game-statistics__item-value game-statistics__item-value_player">{player}</span>
                <span className="game-statistics__item-text">игрок</span>
            </div>
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
