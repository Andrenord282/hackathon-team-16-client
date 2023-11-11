import classNames from "classnames";
import { useState } from "react";

import cover from "assets/img/cover.jpg";

import "./Card.scss";

const Card = (props) => {
    const { id, src, descr, firstCard, secondCard, onClickFlipCard } = props;
    const [isFlipped, setIsFlipped] = useState(false);

    const setClassFpliped = classNames({
        flipped: (firstCard.id === id) | (secondCard.id === id),
        "": !isFlipped,
    });

    return (
        <button data-btn-id={id} data-btn-descr={descr} onClick={onClickFlipCard} className={`card ${setClassFpliped}`}>
            <div className="card__cover">
                <img src={cover} alt="Cover" />
            </div>
            <div className="card__content">
                {/* <img src={src} alt="Content" /> */}
                <p>{descr}</p>
            </div>
        </button>
    );
};

export { Card };
