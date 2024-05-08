import "./App.scss";
import LoginPage from "./pages/LoginPage/LoginPage";
// import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { HashRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import WatchListPage from "./pages/WatchListPage/WatchListPage";
import WatchDetailsPage from "./pages/WatchDetailsPage/WatchDetailsPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

import NextWatchPage from "./pages/NextWatchPage/NextWatchPage";

import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "./utils/api";
import HomePage from "./pages/HomePage/HomePage";
import SharedPage from "./pages/SharedPage/SharedPage";

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
    console.log(response.data);

    setUser(response.data);
  };
  const authToken = localStorage.getItem("authToken");
  useEffect(() => {
    if (authToken) {
      getUser(authToken);
    }
  }, [authToken]);

  const updateUser = (updatedUser: User) => {
    console.log(updatedUser);

    setUser(updatedUser);
  };

  return (
    // <BrowserRouter>
    <HashRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage user={user} />}>
            <Route
              path="/login"
              element={!user ? <LoginPage /> : <Navigate to="/watches" />}
            />
            <Route
              path="/nextwatch"
              element={<NextWatchPage user={user} updateUser={updateUser} />}
            />
            <Route
              path="watches/:id"
              element={<WatchDetailsPage user={user} />}
            />
            <Route path="/watches" element={<WatchListPage user={user} />} />
            <Route path="/shared" element={<SharedPage user={user} />} />
          </Route>
          <Route
            path="/signup"
            element={user ? <Navigate to="/watches" /> : <SignUpPage />}
          />
          <Route
            path="*"
            element={
              <div className="app__notfound-page">
                Not Found 404 🥲. Go back to{" "}
                <Link className="app__link" to="/">
                  homepage
                </Link>
              </div>
            }
          />
        </Routes>
      </div>
      {/* </BrowserRouter> */}
    </HashRouter>
  );
}

export default App;
