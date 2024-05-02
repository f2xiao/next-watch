import "./HomePage.scss";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="app__wrapper">
      {" "}
      <h1>
        Browse the{" "}
        <Link className="home-apge__link" to="/watches">
          watches
        </Link>{" "}
        ,
        <br /> Create your nextwatch and
        <br />
        Share!
      </h1>
      <Link to="/auth/signup"> Get Started</Link>
    </div>
  );
};

export default HomePage;
