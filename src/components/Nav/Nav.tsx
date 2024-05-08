import "./Nav.scss";
import { logout } from "../../utils/auth";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import logoUrl from "../../assets/logo/nextwatch-white.svg";

type LinkObj = {
  link: string;
  text: string;
};

type PropTypes = {
  linkArray: LinkObj[];
  username: string | undefined;
};

const Nav = ({ linkArray, username }: PropTypes) => {
  return (
    <nav className="nav">
      <div className="nav__link">
        <img className="nav__logo" src={logoUrl} alt="nextwatch logo" />
        {linkArray.map((obj) => (
          <Link to={obj.link}>{obj.text}</Link>
        ))}
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
