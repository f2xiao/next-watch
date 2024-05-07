// import CardList from "../../components/CardList/CardList";
import "./LoginPage.scss";
import UserForm from "../../components/UserForm/UserForm";
import { login } from "../../utils/auth";
import Banner from "../../components/Banner/Banner";

const LoginPage = () => {
  return (
    <div className="login-page">
      <h1>Login</h1>
      <UserForm type="login" handleSubmit={login()} />
      <Banner />
    </div>
  );
};

export default LoginPage;
