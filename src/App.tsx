import "./App.scss";
import LoginPage from "./pages/LoginPage/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NextWatchListPage from "./pages/NextWatchListPage/NextWatchListPage";
import NextWatchDetailsPage from "./pages/NextWatchDetailsPage/NextWatchDetailsPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/nextwatches" element={<NextWatchListPage />} />
          <Route path="nextwatches/:Id" element={<NextWatchDetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="*"
            element={<div className="app__wrapper">Not Found 404 🥲</div>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
