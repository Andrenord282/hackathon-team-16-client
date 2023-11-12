import { GameAboutUs } from "widgets/GameAboutUs";

import "./GameAboutUsPage.scss";

const GameAboutUsPage = () => {
    return (
        <div className="game-about-us">
            <div className="game-about-us__container">
                <div className="game-about-us__content">
                    <GameAboutUs />
                </div>
            </div>
        </div>
    );
};

export { GameAboutUsPage };
