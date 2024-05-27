// import CardList from "../../components/CardList/CardList";
import "./LoginPage.scss";
import UserForm from "../../components/UserForm/UserForm";
import { login, loginTestUser } from "../../utils/auth";
import Banner from "../../components/Banner/Banner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Button from "../../components/Button/Button";

type PropTypes = {
  isLoggedIn: boolean;
};

const LoginPage = ({ isLoggedIn }: PropTypes) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/watches");
    }
  });
  return (
    <div className="login-page">
      <h1>Login</h1>
      {/* <UserForm type="login" handleSubmit={login(navigate)} /> */}
      <UserForm type="login" handleSubmit={login()} />
      <Banner />
        <div className="login-page__cta">
          <Button text="login as test acct" handleClick={loginTestUser()}/>
        </div>
    </div>
  );
};

export default LoginPage;
