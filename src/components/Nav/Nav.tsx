import "./Nav.scss";
import { logout } from "../../utils/auth";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";

type PropTypes = {
  link1: string;
  link1_text: string;
  link2: string;
  link2_text: string;
  username: string;
};

const Nav = ({ link1, link1_text, link2, link2_text, username }: PropTypes) => {
  const navigate = useNavigate();
  return (
    <nav className="nav">
      <div className="nav__link">
        <Link to={link1}>{link1_text}</Link>
        <Link to={link2}>{link2_text}</Link>
      </div>
      <div className="nav__user">
        <span> {`${username}`} </span>
        <Button
          text="logout"
          handleClick={() => {
            logout(navigate);
          }}
        />
      </div>
    </nav>
  );
};

export default Nav;
