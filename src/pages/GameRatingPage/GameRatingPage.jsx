import { GameRating } from "widgets/GameRating";

import "./GameRatingPage.scss";

const GameRatingPage = () => {
    return (
        <div className="game-rating-page">
            <div className="game-rating-page__container">
                <div className="game-rating-page__content">
                    <GameRating />
                </div>
            </div>
        </div>
    );
};

export { GameRatingPage };
