// import CardList from "../../components/CardList/CardList";
import "./LoginPage.scss";
import UserForm from "../../components/UserForm/UserForm";

import { useNavigate } from "react-router-dom";
import { login } from "../../utils/auth";
import Banner from "../../components/Banner/Banner";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className="login-page">
      <h1>Login</h1>
      <UserForm type="login" handleSubmit={login(navigate)} />
      <Banner />
    </div>
  );
};

export default LoginPage;
