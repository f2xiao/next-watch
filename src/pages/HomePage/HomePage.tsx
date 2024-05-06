import { useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

type User = {
  username: string;
  emial: string;
  share: boolean;
  nextwatches: [];
  id: string;
};

type PropTypes = {
  user: User | null;
};

const HomePage = ({ user }: PropTypes) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // const authToken = localStorage.getItem("authToken");
    console.log(user);
    console.log(location.pathname);

    if (!user) {
      navigate("/login");
    } else {
      if (location.pathname === "/") {
        navigate("/watches");
      } else {
        navigate(`${location.pathname}`);
      }
    }
  }, [navigate, user, location.pathname]);

  return <Outlet />;
};

export default HomePage;
