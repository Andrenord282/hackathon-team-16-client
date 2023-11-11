import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "pages/Home";
import { Game } from "pages/Game";
import { Provider } from "react-redux";
import store from "store/store";
import { GameContextProvider } from "context/useGameContext";

function App() {
    return (
        <div className="app">
            <GameContextProvider>
                <Provider store={store}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/game" element={<Game />} />
                        </Routes>
                    </BrowserRouter>
                </Provider>
            </GameContextProvider>
        </div>
    );
}

export default App;
