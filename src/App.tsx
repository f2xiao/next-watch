import "./App.scss";
import LoginPage from "./pages/LoginPage/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WatchListPage from "./pages/WatchListPage/WatchListPage";
import WatchDetailsPage from "./pages/WatchDetailsPage/WatchDetailsPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import HomePage from "./pages/HomePage/HomePage";

import NextWatchPage from "./pages/NextWatchPage/NextWatchPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/nextwatch" element={<NextWatchPage />} />
            <Route path="/watches/:id" element={<WatchDetailsPage />} />
          </Route>
          <Route path="/watches" element={<WatchListPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="*"
            element={<div className="app__wrapper">Not Found 404 🥲</div>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
