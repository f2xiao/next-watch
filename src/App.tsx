import "./App.scss";
import NextWatchDetailsPage from "./pages/NextWatchDetailsPage/NextWatchDetailsPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter className="app">
        <Routes>
          <Route path="/" element={<NextWatchListPage />} />
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
