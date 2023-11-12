import { Link, useNavigate } from "react-router-dom";
import { useGameWinState } from "./hooks/useGameWinState";
import { useEffect } from "react";
import CatImg from "assets/img/cat.png";

import "./GameWin.scss";
const GameWin = () => {
    const navigate = useNavigate();
    const { player, elapsedTimer, movesCount } = useGameWinState();
    console.log(player);

    useEffect(() => {
        if (!player) {
            navigate("/");
        }
    });

    return (
        <div className="game-win">
            <div className="game-win__content">
                <img src={CatImg} className="game-win__cat-img" alt="" />
                <h1 className="game-win__title">
                    {player}, Поздравляем! <br /> Ты собрал все карточки
                </h1>
                <div className="game-win__descr">
                    <p className="game-win__descr-text">
                        Узнать о проблеме — первый шаг к реальным переменам. Теперь, когда ты узнал больше о сиротстве,
                        давайте превратим знание{" "}
                        <a href="https://docs.google.com/document/d/1ilDuHz-TFXP_ID6eBZvFRqnb8emcTq2Jy1KeA5S2z_g/edit" target="_blank">
                            в действие
                        </a>
                        .
                    </p>
                </div>
                <div className="game-win__statistics">
                    <div className="game-win__statistics-item">
                        <span className="game-win__statistics-item-value">{elapsedTimer}</span>
                        <span className="game-win__statistics-item-text">
                            Вермя <br /> игры
                        </span>
                    </div>
                    <div className="game-win__statistics-item">
                        <span className="game-win__statistics-item-value">{movesCount}</span>
                        <span className="game-win__statistics-item-text">
                            Количество <br />
                            ходов
                        </span>
                    </div>
                </div>
                <Link to={"/"} className="game-win____btn">
                    Назад в меню
                </Link>
                <Link to={"/game-board"} className="game-win____btn">
                    Новая игра
                </Link>
            </div>
        </div>
    );
};

export { GameWin };
