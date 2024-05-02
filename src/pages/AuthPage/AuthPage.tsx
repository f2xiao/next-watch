import "./AuthPage.scss";
import { useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");

    if (!authToken) {
      navigate("/auth/login");
    } else {
      navigate("/");
    }
  }, [location.pathname]);

  return <Outlet />;
};

export default AuthPage;
