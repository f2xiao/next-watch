import "./HomePage.scss";
import { useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");

    if (!authToken) {
      navigate("/login");
    } else {
      navigate("/watches");
    }
  }, [location.pathname]);

  return <Outlet />;
};

export default HomePage;
