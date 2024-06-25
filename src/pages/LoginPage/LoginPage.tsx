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
      <div className="login-page__top">
        <div  className="login-page__box">
          <h1>Login</h1>
          {/* <UserForm type="login" handleSubmit={login(navigate)} /> */}
          <UserForm type="login" handleSubmit={login()} />
          <div className="login-page__banner login-page__banner--first">
            <Banner />
          </div>
        </div>
         <p className="login-page__text">OR</p>
        <div className="login-page__box login-page__box--right">
          <div className="login-page__cta">
            <Button className="login-page__button" text="try with test acct" handleClick={loginTestUser()}/>
          </div>
        </div>
      </div>
      <div className="login-page__banner login-page__banner--second">
        <Banner />
      </div>
    </div>
  );
};

export default LoginPage;
