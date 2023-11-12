import classNames from "classnames";

import cover from "assets/img/cover.jpg";

import * as Cards from "assets/img/cards";

import "./Card.scss";

const Card = (props) => {
    const { id, name, firstCard, secondCard, openedCardsLis, onClickFlipCard } = props;

    const setClassFpliped = classNames({
        flipped: (firstCard.id === id) | (secondCard.id === id) | (openedCardsLis[name] === name),
        "": (firstCard.id !== id) | (secondCard.id !== id) | (openedCardsLis[id] !== id),
    });

    const imgScr = Cards[name];

    return (
        <button data-btn-id={id} data-btn-name={name} onClick={onClickFlipCard} className={`card ${setClassFpliped}`}>
            <div className="card__cover">
                <img src={cover} alt="" />
            </div>
            <div className="card__content">
                <img src={imgScr} alt="" />
            </div>
        </button>
    );
};

export { Card };
