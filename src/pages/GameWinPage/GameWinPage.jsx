import { GameWin } from "widgets/GameWin/GameWin";
import "./GameWinPage.scss";

const GameWinPage = () => {
    return (
        <div className="game-win-page">
            <div className="game-win-page__container">
                <div className="game-win-page__content">
                    <GameWin />
                </div>
            </div>
        </div>
    );
};

export { GameWinPage };
