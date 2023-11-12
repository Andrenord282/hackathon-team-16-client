import { cardList } from "utilities/data";
import * as Cards from "assets/img/cards";
import "./MatchedСardModal.scss";

const MatchedСardModal = (props) => {
    const { mathetCardDescr, setOpenMatchedCardModal } = props;

    const cardDescr = cardList.find((card) => card.name === mathetCardDescr.name);
    const imgScr = Cards[mathetCardDescr.name];

    return (
        <div className="matched-card-modal">
            <h3 className="matched-card-modal__title">{cardDescr.title}</h3>
            <div className="matched-card-modal__body">
                <div className="matched-card-modal__descr">
                    {cardDescr &&
                        cardDescr.descr.length > 0 &&
                        cardDescr.descr.map((text) => {
                            return (
                                <p key={text} className="matched-card-modal__text">
                                    {text}
                                </p>
                            );
                        })}
                    {cardDescr &&
                        cardDescr.checkList &&
                        cardDescr.checkList.length > 0 &&
                        cardDescr.checkList.map((text) => {
                            return (
                                <p key={text} className="matched-card-modal__list-item">
                                    {text}
                                </p>
                            );
                        })}
                    {cardDescr &&
                        cardDescr.links &&
                        cardDescr.links.length > 0 &&
                        cardDescr.links.map((text) => {
                            return (
                                <a href={text[1]} key={text[1]} className="matched-card-modal__link">
                                    {text[0]}
                                </a>
                            );
                        })}
                </div>
                <div className="matched-card-modal__item-img">
                    <img src={imgScr} className="matched-card-modal__text-img" alt="" />
                </div>
            </div>

            <button
                className="matched-card-modal__btn"
                onClick={(e) => {
                    e.stopPropagation();
                    setOpenMatchedCardModal(false);
                }}
            >
                Продолжить
            </button>
        </div>
    );
};

export { MatchedСardModal };
