import classNames from "classnames";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGameBoardState } from "./hooks/useGameBoardState";
import { Modal } from "components/Modal/Modal";
import { GameStatistics } from "./components/GameStatistics/GameStatistics";
import { Card } from "./components/Card";
import { MatchedСardModal } from "./components/MatchedСardModal";
import { GameLosingModal } from "./components/GameLosingModal";

import "./GameBoard.scss";

const GameBoard = () => {
    const {
        gameСountdownTimer,
        elapsedTimer,
        countdownTimer,
        cardsListСompiled,
        openMatchedCardModal,
        setOpenMatchedCardModal,
        openGameLosingModal,
        setOpenGameLosingModal,
        movesCount,
        firstCard,
        secondCard,
        openedCardsList,
        winnerCardDescr,
        onClickFlipCard,
        onClickResetGame,
        player,
    } = useGameBoardState();
    const navigate = useNavigate();
    const setClassWidthCardList = classNames({
        "size-m": cardsListСompiled.length <= 14,
        "size-l": cardsListСompiled.length > 10,
    });

    useEffect(() => {
        if (!player) {
            navigate("/");
        }
    });

    return (
        <div className="game-board">
            <div className="game-board__content">
                <div className="game-board__head">
                    <div className="game-board__head-descr">
                        <Link to={"/"} className="game-about-us__link">
                            <h2 className="game-board__title">Memory Game</h2>
                        </Link>
                        <Link to={"/game-rating"} className="game-board__link">
                            Рейтинг
                        </Link>
                        <Link to={"/game-about-us"} className="game-board__link">
                            О проекте
                        </Link>
                    </div>
                    <button className="game-board__reset-btn" onClick={onClickResetGame}>
                        Начать заново
                    </button>
                </div>
                <div className="game-board__body">
                    <div className={`game-board__card-list ${setClassWidthCardList}`}>
                        {cardsListСompiled &&
                            cardsListСompiled.length > 0 &&
                            cardsListСompiled.map((card) => {
                                const { id, src, descr } = card;
                                return (
                                    <Card
                                        key={id}
                                        id={id}
                                        src={src}
                                        descr={descr}
                                        firstCard={firstCard}
                                        secondCard={secondCard}
                                        openedCardsLis={openedCardsList}
                                        onClickFlipCard={onClickFlipCard}
                                    />
                                );
                            })}
                    </div>
                    <GameStatistics
                        player={player}
                        movesCount={movesCount}
                        elapsedTimer={elapsedTimer}
                        countdownTimer={countdownTimer}
                        gameСountdownTimer={gameСountdownTimer}
                        className="game-board__statistics"
                    />
                </div>
                <Modal isOpen={openMatchedCardModal}>
                    <MatchedСardModal
                        winnerCardDescr={winnerCardDescr}
                        setOpenMatchedCardModal={setOpenMatchedCardModal}
                    />
                </Modal>
                <Modal isOpen={openGameLosingModal}>
                    <GameLosingModal
                        setOpenGameLosingModal={setOpenGameLosingModal}
                        onClickResetGame={onClickResetGame}
                    />
                </Modal>
            </div>
        </div>
    );
};

export { GameBoard };
