import "./Nav.scss";
import { logout } from "../../utils/auth";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import logoUrl from "../../assets/logo/nextwatch-white.svg";

type PropTypes = {
  link1: string;
  link1_text: string;
  link2: string;
  link2_text: string;
  username: string | undefined;
};

const Nav = ({ link1, link1_text, link2, link2_text, username }: PropTypes) => {
  return (
    <nav className="nav">
      <div className="nav__link">
        <img className="nav__logo" src={logoUrl} alt="nextwatch logo" />
        <Link to={link1}>{link1_text}</Link>
        <Link to={link2}>{link2_text}</Link>
      </div>
      <div className="nav__user">
        <span> {`${username}`} </span>
        <Button
          text="logout"
          handleClick={() => {
            logout();
          }}
        />
      </div>
    </nav>
  );
};

export default Nav;
