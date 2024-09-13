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

  const [errors, setErrors] = useState({
    username: false,
    email: false,
    password: false,
  });

  const patterns: { [key: string]: RegExp } = {
    username: /^[a-zA-Z0-9](?:[._]?[a-zA-Z0-9]){2,}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password: /^[a-zA-Z0-9!@#$%^&*]{6,}$/,
  };

  const validateFn = (pattern: RegExp, value: string) => !pattern.test(value);

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

    setErrors((prevState) => ({
      ...prevState,
      [name]: validateFn(patterns[name], value),
    }));
  };

  return (
    <>
      <form
        className="user-form"
        onSubmit={(e) => {
          handleSubmit(e, user);
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
          {errors.username && (
            <p className="user-form__error">
              Please enter a username of a min length of 3
            </p>
          )}
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

            {errors.email && (
              <p className="user-form__error">Please enter a valid email</p>
            )}
          </div>
        ) : (
          ""
        )}
        <div className="user-form__entry">
          <label className="user-form__label" htmlFor="password">
            password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleUserChange}
            value={user.password}
          />

          {errors.password && (
            <p className="user-form__error">
              Please enter a password of a min length of 6
            </p>
          )}
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
