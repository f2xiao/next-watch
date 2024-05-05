import UserForm from "../../components/UserForm/UserForm";
import "./SignUpPage.scss";
import { useNavigate } from "react-router-dom";
// import CardList from "../../components/CardList/CardList";
import { signup } from "../../utils/auth";
import Banner from "../../components/Banner/Banner";

const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <div className="signup-page">
      <h1>Signup</h1>
      <UserForm type="signup" handleSubmit={signup(navigate)} />
      <Banner />
    </div>
  );
};

export default SignUpPage;
