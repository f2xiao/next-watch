import "./App.scss";
import LoginPage from "./pages/LoginPage/LoginPage";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import WatchListPage from "./pages/WatchListPage/WatchListPage";
import WatchDetailsPage from "./pages/WatchDetailsPage/WatchDetailsPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import NextWatchPage from "./pages/NextWatchPage/NextWatchPage";
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import SharedPage from "./pages/SharedPage/SharedPage";
import { getOne } from "./utils/user";
import Footer from "./components/Footer/Footer";

type User = {
  username: string;
  emial: string;
  share: boolean;
  nextwatches: [];
  id: string;
};

function App() {
  const [user, setUser] = useState<null | User>(null);
  const [isLoggedin, setIsLoggedIn] = useState(false);

  const fetchUser: () => void = async () => {
    const response = await getOne();
    // console.log(response.data);

    setUser(response.data);
    setIsLoggedIn(true);
  };
  const authToken = localStorage.getItem("authToken");
  useEffect(() => {
    if (authToken) {
      fetchUser();
    }
  }, [authToken]);

  const updateUser = (updatedUser: User) => {
    console.log(updatedUser);

    setUser(updatedUser);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <div className="app__content">
          <Routes>
            <Route path="/" element={<HomePage isLoggedIn={isLoggedin} />}>
              <Route
                path="/login"
                element={<LoginPage isLoggedIn={isLoggedin} />}
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
              element={<SignUpPage isLoggedIn={isLoggedin} />}
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
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
