import { GameBoard } from "widgets/GameBoard/GameBoard";

import "./Game.scss";

const Game = () => {
    return (
        <div className="game">
            <div className="game__content">
                <GameBoard />
            </div>
        </div>
    );
};

export { Game };
