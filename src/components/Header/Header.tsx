import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <Link className="nav__link" to="/">
          Home
        </Link>
        <Link className="nav__link" to="/watches">
          Watches
        </Link>
      </nav>
    </header>
  );
};

export default Header;
