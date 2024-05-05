import "./App.scss";
import LoginPage from "./pages/LoginPage/LoginPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WatchListPage from "./pages/WatchListPage/WatchListPage";
import WatchDetailsPage from "./pages/WatchDetailsPage/WatchDetailsPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

import NextWatchPage from "./pages/NextWatchPage/NextWatchPage";

import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "./utils/api";
import HomePage from "./pages/HomePage/HomePage";

type User = {
  username: string;
  emial: string;
  share: boolean;
  nextwatches: [];
  id: string;
};

function App() {
  const [user, setUser] = useState<null | User>(null);
  const getUser: (authToken: string) => void = async (authToken) => {
    const response = await axios.get(`${API_URL}/api/users`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    // console.log(response.data);

    setUser(response.data);
  };
  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      getUser(authToken);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route
              path="/login"
              element={!user ? <LoginPage /> : <Navigate to="/watches" />}
            />
            <Route
              path="/nextwatch"
              element={<NextWatchPage username={user?.username || ""} />}
            />
            <Route
              path="watches/:id"
              element={<WatchDetailsPage username={user?.username || ""} />}
            />
            <Route path="/watches" element={<WatchListPage />} />
          </Route>
          <Route
            path="/signup"
            element={user ? <Navigate to="/watches" /> : <SignUpPage />}
          />
          <Route path="*" element={<div>Not Found 404 🥲</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
