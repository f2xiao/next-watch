import axios from "axios";
import { API_URL } from "./api";
type User = {
  username: string;
  email: string;
  password: string;
};

export const login = () => async (event: React.SyntheticEvent, user: User) => {
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
      window.location.reload();
    }
  } catch (error) {
    console.log("Request failed", error);
  }
};

export const signup =
  (navigate: (route: string) => void) =>
  async (event: React.SyntheticEvent, user: User) => {
    event.preventDefault();
    console.log(user);
    const { username, password, email } = user;
    //login the user
    try {
      const response = await axios.post(`${API_URL}/api/users/signup`, {
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

export const logout = () => {
  localStorage.removeItem("authToken");
  window.location.reload();
};
