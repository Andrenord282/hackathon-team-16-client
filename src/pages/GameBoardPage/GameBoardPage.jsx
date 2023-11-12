import { GameBoard } from "widgets/GameBoard/GameBoard";

import "./GameBoardPage.scss";

const GameBoardPage = () => {
    return (
        <div className="game-board-page">
            <div className="game-board-page__container">
                <div className="game-board-page__content">
                    <GameBoard />
                </div>
            </div>
        </div>
    );
};

export { GameBoardPage };
