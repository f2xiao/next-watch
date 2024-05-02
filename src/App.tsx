import "./App.scss";
import LoginPage from "./pages/LoginPage/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WatchListPage from "./pages/WatchListPage/WatchListPage";
import WatchDetailsPage from "./pages/WatchDetailsPage/WatchDetailsPage";
import HomePage from "./pages/HomePage/HomePage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/watches" element={<WatchListPage />} />
            <Route path="watches/:Id" element={<WatchDetailsPage />} />
          </Route>
          <Route path="/signup" element={<SignUpPage />} />
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
