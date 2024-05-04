import "./HomePage.scss";
import { useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    console.log(location.pathname);

    if (!authToken) {
      navigate("/login");
    } else {
      if (location.pathname === "/") {
        navigate(`/watches`);
      } else {
        navigate(`${location.pathname}`);
      }
    }
  }, [navigate, location.pathname]);

  return <Outlet />;
};

export default AuthPage;
