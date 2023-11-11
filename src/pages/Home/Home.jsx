import { GameEntry } from "widgets/GameEntry";

import "./Home.scss";

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <div className="home__content">
                    <GameEntry />
                </div>
            </div>
        </div>
    );
};

export { Home };
