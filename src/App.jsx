import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "pages/Home";
import { Game } from "pages/Game";
import { Provider } from "react-redux";
import store from "store/store";

function App() {
    return (
        <div className="app">
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/game" element={<Game />} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
