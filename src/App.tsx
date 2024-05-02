import "./App.scss";
import LoginPage from "./pages/LoginPage/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WatchListPage from "./pages/WatchListPage/WatchListPage";
import WatchDetailsPage from "./pages/WatchDetailsPage/WatchDetailsPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />}>
            <Route path="/auth/login" element={<LoginPage />} />
          </Route>
          <Route path="/watches" element={<WatchListPage />} />
          <Route path="watches/:Id" element={<WatchDetailsPage />} />
          <Route path="/auth/signup" element={<SignUpPage />} />
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
