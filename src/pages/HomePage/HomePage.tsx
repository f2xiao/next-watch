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
      if (location.pathname === "/") {
        navigate("/watches");
      } else {
        navigate(`${location.pathname}`);
      }
    }
  }, [location.pathname]);

  return <Outlet />;
};

export default HomePage;
