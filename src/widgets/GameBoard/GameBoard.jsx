import { useGameBoardState } from "./hooks/useGameBoardState";
import { GameStatistics } from "./components/GameStatistics/GameStatistics";
import { Modal } from "components/Modal/Modal";
import { Card } from "./components/Card";
import { WinnerItem } from "./components/WinnerItem";

import "./GameBoard.scss";

const GameBoard = () => {
    const {
        gameFieldSize,
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
    } = useGameBoardState();

    return (
        <div className="game-board">
            <div className="game-board__content">
                <div className="game-board__head">
                    <h2 className="game-board__title">Memory Game</h2>
                    <GameStatistics
                        movesCount={movesCount}
                        elapsedTimer={elapsedTimer}
                        countdownTimer={countdownTimer}
                        className="game-board__statistics"
                    />
                </div>
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
                <button className="game-board__reset-btn">Начать заново</button>
                <Modal isOpen={isOpenCardModal} onClose={() => setOpenCardModal(false)}>
                    <WinnerItem winnerCardDescr={winnerCardDescr} />
                </Modal>
            </div>
        </div>
    );
};

export { GameBoard };
