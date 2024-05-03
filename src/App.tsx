import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WatchListPage from "./pages/WatchListPage/WatchListPage";
import WatchDetailsPage from "./pages/WatchDetailsPage/WatchDetailsPage";

import NextWatchPage from "./pages/NextWatchPage/NextWatchPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<WatchListPage />}>
            <Route path="/nextwatch" element={<NextWatchPage />} />
            <Route path="watches/:Id" element={<WatchDetailsPage />} />
          </Route>
          <Route path="/watches" element={<WatchListPage />} />
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
