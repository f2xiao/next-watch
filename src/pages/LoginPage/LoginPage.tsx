import { useState } from "react";
import UserForm from "../../components/UserForm/UserForm";
import { API_URL } from "../../utils/api";
import "./LoginPage.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

type User = {
  username: string;
  email: string;
  password: string;
};

const LoginPage = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);

  const login = async (event: React.SyntheticEvent, user: User) => {
    event.preventDefault();
    console.log(user);
    const { username, password } = user;
    //login the user
    try {
      const response = await axios.post(`${API_URL}/api/users/login`, {
        username,
        password,
      });

      if (response.status === 401) {
        console.log("Invalid username or password");
      }

      if (response.status === 200) {
        // save the token to the localStorage
        // console.log(response.data);
        localStorage.setItem("authToken", response.data.token);
        navigate("/watches");
      }
    } catch (error) {
      console.log("Request failed", error);
    }
  };

  return (
    <div className="login-page">
      <h1>
        Browse the <Link to="/watches">watches</Link> ,
        <br /> Create your nextwatch and
        <br />
        Share!
      </h1>
      {showLogin ? (
        <>
          <h1>Login</h1>
          <UserForm type="login" handleSubmit={login} />
          <p className="login-page__text">
            No account?{" "}
            <Link className="login-page__link" to="/signup">
              Sign Up
            </Link>
          </p>
        </>
      ) : (
        <>
          <button
            className="login-page__cta"
            onClick={() => {
              setShowLogin(true);
            }}
          >
            Get Started
          </button>
        </>
      )}
    </div>
  );
};

export default LoginPage;
