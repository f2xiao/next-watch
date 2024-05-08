import { useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

// type User = {
//   username: string;
//   emial: string;
//   share: boolean;
//   nextwatches: [];
//   id: string;
// };

// type PropTypes = {
//   user: User | null;
// };

type PropTypes = {
  isLoggedIn: boolean;
};

// const HomePage = ({ user }: PropTypes) => {
const HomePage = ({ isLoggedIn }: PropTypes) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // const authToken = localStorage.getItem("authToken");
    // console.log(user);
    // console.log(location.pathname);

    if (!isLoggedIn) {
      navigate("/login");
    } else {
      if (location.pathname === "/") {
        navigate("/watches");
      } else {
        navigate(`${location.pathname}`);
      }
    }
    // }, [navigate, user, location.pathname]);
  }, [navigate, isLoggedIn, location.pathname]);

  return <Outlet />;
};

export default HomePage;
