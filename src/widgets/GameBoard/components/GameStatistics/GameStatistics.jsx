import classNames from "classnames";
import { useSetRenderTimeType } from "./hooks/useSetRenderTimeType";

import "./GameStatistics.scss";
import { useEffect, useState } from "react";

const GameStatistics = (props) => {
    const { className, player, movesCount, elapsedTimer, countdownTimer, gameСountdownTimer } = props;
    const [playerDisplay, setPlayerDisplay] = useState([]);
    const { setRenderTimeType } = useSetRenderTimeType();

    useEffect(() => {
        const splitIndex = player.indexOf("#");

        const name = player.substring(0, splitIndex);
        const tag = player.substring(splitIndex);

        setPlayerDisplay([name, tag]);
    }, [player]);

    return (
        <div className={`game-statistics ${classNames(className)}`}>
            <div className="game-statistics__item">
                <span className="game-statistics__item-value game-statistics__item-value_player">
                    {playerDisplay[0]} <br />
                    {playerDisplay[1]}{" "}
                </span>
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
