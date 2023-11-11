import classNames from "classnames";
import { useState } from "react";

import cover from "assets/img/cover.jpg";
import content from "assets/img/content.jpg";

import "./Card.scss";

const Card = (props) => {
    const { gameFieldSize } = props;
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    const setClassSizeCard = classNames({
        "size-l": gameFieldSize === 4,
        "size-m": gameFieldSize === 5,
        "size-s": gameFieldSize === 6,
    });

    const setClassFpliped = classNames({
        flipped: isFlipped,
        "": !isFlipped,
    });

    return (
        <button className={`card ${setClassSizeCard} ${setClassFpliped}`} onClick={handleClick}>
            <div className="card__cover">
                <img src={cover} alt="Cover" />
            </div>
            <div className="card__content">
                <img src={content} alt="Content" />
            </div>
        </button>
    );
};

export { Card };
