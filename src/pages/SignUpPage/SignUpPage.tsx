import UserForm from "../../components/UserForm/UserForm";
import "./SignUpPage.scss";
import { useNavigate } from "react-router-dom";
import { signup } from "../../utils/auth";
import Banner from "../../components/Banner/Banner";
import { useEffect } from "react";

type PropTypes = {
  isLoggedIn: boolean;
};

const SignUpPage = ({ isLoggedIn }: PropTypes) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/watches");
    }
  });

  return (
    <div className="signup-page">
      <h1>Signup</h1>
      <UserForm type="signup" handleSubmit={signup(navigate)} />
      <Banner />
    </div>
  );
};

export default SignUpPage;
