import { GameRating } from "widgets/GameRating";

import "./GameRatingPage.scss";

const GameRatingPage = () => {
    return (
        <div className="game-rating">
            <div className="game-rating__container">
                <div className="game-rating__content">
                    <GameRating />
                </div>
            </div>
        </div>
    );
};

export { GameRatingPage };
