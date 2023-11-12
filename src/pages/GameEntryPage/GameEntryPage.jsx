import { GameEntry } from "widgets/GameEntry";

import "./GameEntryPage.scss";

const GameEntryPage = () => {
    return (
        <div className="game-entry-page">
            <div className="game-entry-page__container">
                <div className="game-entry-page__content">
                    <GameEntry />
                </div>
            </div>
        </div>
    );
};

export { GameEntryPage };
