import { Link } from "react-router-dom";
import { useGameBoardState } from "./hooks/useGameBoardState";
import { Modal } from "components/Modal/Modal";
import { GameStatistics } from "./components/GameStatistics/GameStatistics";
import { Card } from "./components/Card";
import { WinnerItem } from "./components/WinnerItem";

import "./GameBoard.scss";

const GameBoard = () => {
    const {
        gameСountdownTimer,
        elapsedTimer,
        countdownTimer,
        cardsListСompiled,
        isOpenCardModal,
        setOpenCardModal,
        movesCount,
        firstCard,
        secondCard,
        openedCardsList,
        winnerCardDescr,
        onClickFlipCard,
        onClickResetGame,
    } = useGameBoardState();

    return (
        <div className="game-board">
            <div className="game-board__content">
                <div className="game-board__head">
                    <div className="game-board__head-descr">
                        <h2 className="game-board__title">Memory Game</h2>
                        <Link to={"/raitng"} className="game-board__link">
                            Рейтинг
                        </Link>
                        <Link to={"/about-us"} className="game-board__link">
                            О проекте
                        </Link>
                    </div>
                    <button className="game-board__reset-btn" onClick={onClickResetGame}>
                        Начать заново
                    </button>
                </div>
                <div className="game-board__body">
                    <div className="game-board__card-list">
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
                        movesCount={movesCount}
                        elapsedTimer={elapsedTimer}
                        countdownTimer={countdownTimer}
                        gameСountdownTimer={gameСountdownTimer}
                        className="game-board__statistics"
                    />
                </div>

                <Modal isOpen={isOpenCardModal}>
                    <WinnerItem winnerCardDescr={winnerCardDescr} setOpenCardModal={setOpenCardModal} />
                </Modal>
            </div>
        </div>
    );
};

export { GameBoard };
