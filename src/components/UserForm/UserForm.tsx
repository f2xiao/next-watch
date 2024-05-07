import { useState } from "react";
import "./UserForm.scss";
import { Link } from "react-router-dom";

type UserFormProps = {
  type: string;
  handleSubmit: (e: React.SyntheticEvent, user: User) => void;
};

type User = {
  username: string;
  email: string;
  password: string;
};

const UserForm = ({ type, handleSubmit }: UserFormProps) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  // const secondLink = type === "login" ? "/signup" : "/login";
  const secondLinkText = type === "login" ? "signup" : "login";

  const handleUserChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void = (event) => {
    const { name, value } = event.target;
    // console.log(name, value);

    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // console.log(user);
  };

  return (
    <>
      <form
        className="user-form"
        onSubmit={() => {
          handleSubmit(event, user);
        }}
      >
        <div className="user-form__entry">
          <label className="user-form__label" htmlFor="username">
            username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleUserChange}
            value={user.username}
          />
        </div>
        {type === "signup" ? (
          <div className="user-form__entry">
            <label className="user-form__label" htmlFor="email">
              email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleUserChange}
              value={user.email}
            />
          </div>
        ) : (
          ""
        )}
        <div className="user-form__entry">
          <label className="user-form__label" htmlFor="password">
            password
          </label>
          <input
            type="text"
            name="password"
            id="password"
            onChange={handleUserChange}
            value={user.password}
          />
        </div>
        <div className="user-form__cta">
          <button className="user-form__button" type="submit">
            {type}
          </button>
        </div>
      </form>
      <p>
        {type === "signup" ? "Already has a account? " : "No account yet? "}
        <Link to={`/${secondLinkText}`}>{secondLinkText}</Link>
      </p>
    </>
  );
};

export default UserForm;
