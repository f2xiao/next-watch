import UserForm from "../../components/UserForm/UserForm";
import { API_URL } from "../../utils/api";
import "./LoginPage.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type User = {
  username: string;
  email: string;
  password: string;
};

const LoginPage = () => {
  const navigate = useNavigate();
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
        navigate("/nextwatches");
      }
    } catch (error) {
      console.log("Request failed", error);
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <UserForm type="login" handleSubmit={login} />
    </div>
  );
};

export default LoginPage;
