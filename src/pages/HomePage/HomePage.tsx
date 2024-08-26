import { useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

type PropTypes = {
  isLoggedIn: boolean;
};

const HomePage = ({ isLoggedIn }: PropTypes) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    } else {
      if (location.pathname === "/") {
        navigate("/watches");
      } else {
        navigate(`${location.pathname}`);
      }
    }
  }, [navigate, isLoggedIn, location.pathname]);

  return <Outlet />;
};

export default HomePage;
