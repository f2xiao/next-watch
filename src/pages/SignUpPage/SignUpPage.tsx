import UserForm from "../../components/UserForm/UserForm";
import "./SignUpPage.scss";
import axios from "axios";
import { API_URL } from "../../utils/api";
import { useNavigate } from "react-router-dom";

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
    <div>
      <UserForm type="signup" handleClick={signUp} title="Signup" />
    </div>
  );
};

export default SignUpPage;
