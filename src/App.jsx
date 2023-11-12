import { Routes, Route, BrowserRouter } from "react-router-dom";
import { GameContextProvider } from "context/useGameContext";
import { GameEntryPage } from "pages/GameEntryPage";
import { GameBoardPage } from "pages/GameBoardPage";
import { GameRatingPage } from "pages/GameRatingPage";
import { GameAboutUsPage } from "pages/GameAboutUsPage";

function App() {
    return (
        <div className="app">
            <GameContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<GameEntryPage />} />
                        <Route path="/game-board" element={<GameBoardPage />} />
                        <Route path="/game-rating" element={<GameRatingPage />} />
                        <Route path="/game-about-us" element={<GameAboutUsPage />} />
                    </Routes>
                </BrowserRouter>
            </GameContextProvider>
        </div>
    );
}

export default App;
