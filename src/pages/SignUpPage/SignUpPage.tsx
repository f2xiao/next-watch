import UserForm from "../../components/UserForm/UserForm";
import "./SignUpPage.scss";
import axios from "axios";
import { API_URL } from "../../utils/api";
import { Link, useNavigate } from "react-router-dom";

type User = {
  username: string;
  email: string;
  password: string;
};

const SignUpPage = () => {
  const navigate = useNavigate();
  const signUp = async (event: React.SyntheticEvent, user: User) => {
    event.preventDefault();
    console.log(user);
    const { username, password, email } = user;
    //login the user
    try {
      const response = await axios.post(`${API_URL}/api/users`, {
        username,
        password,
        email,
      });

      if (response.status === 401) {
        console.log("Invalid username or password");
      }

      if (response.status === 201) {
        console.log(response.data);
        navigate("/login");
      }
    } catch (error) {
      console.log("Request failed", error);
    }
  };

  return (
    <div className="signup-page">
      <h1 className="signup-page__title">
        Browse the <Link to="/watches">watches</Link> ,
        <br />
        Create your nextwatch and
        <br />
        Share!
      </h1>
      <hr />
      <div className="signup-page__form">
        <h1>Signup</h1>
        <UserForm type="signup" handleSubmit={signUp} />
        <p className="signup-page__text">
          Already has a account?{" "}
          <Link className="login-page__link" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
