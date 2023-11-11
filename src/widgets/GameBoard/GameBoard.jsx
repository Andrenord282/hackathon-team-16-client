import classNames from "classnames";
import { useGameBoardState } from "./hooks/useGameBoardState";
import { GameStatistics } from "./components/GameStatistics/GameStatistics";
import { Card } from "./components/Card";

import "./GameBoard.scss";

const data = {
    id: 1,
    value: 1,
};

const GameBoard = () => {
    const { gameFieldSize } = useGameBoardState();

    const setClassCardList = classNames({
        gameFieldSize: gameFieldSize === 4,
        gameFieldSize: gameFieldSize === 5,
        gameFieldSize: gameFieldSize === 6,
    });

    return (
        <div className="game-board">
            <div className="game-board__content">
                <div className="game-board__head">
                    <h2 className="game-board__title">Memory Game</h2>
                    <GameStatistics className="game-board__statistics" />
                </div>
                <div className="game-board__card-list">
                    {new Array(16).fill(42).map((card, index) => {
                        return <Card key={index} gameFieldSize={4} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export { GameBoard };
