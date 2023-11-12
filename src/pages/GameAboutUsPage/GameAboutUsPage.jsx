import { GameAboutUs } from "widgets/GameAboutUs";

import "./GameAboutUsPage.scss";

const GameAboutUsPage = () => {
    return (
        <div className="game-about-us-page">
            <div className="game-about-us-page__container">
                <div className="game-about-us-page__content">
                    <GameAboutUs />
                </div>
            </div>
        </div>
    );
};

export { GameAboutUsPage };
