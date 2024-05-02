import { useState } from "react";
import "./UserForm.scss";

type UserFormProps = {
  type: string;
  title: string;
  handleSubmit: (e: React.SyntheticEvent, user: User) => void;
};

type User = {
  username: string;
  email: string;
  password: string;
};

const UserForm = ({ type, title, handleSubmit }: UserFormProps) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

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
      <h1>{title}</h1>
      <form
        className="user-form"
        onSubmit={() => {
          handleSubmit(event, user);
        }}
      >
        <label className="user-form__label" htmlFor="username">
          username
        </label>
        <br />
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleUserChange}
          value={user.username}
        />{" "}
        <br />
        {type === "signup" ? (
          <>
            <label className="user-form__label" htmlFor="email">
              email
            </label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleUserChange}
              value={user.email}
            />
            <br />
          </>
        ) : (
          ""
        )}
        <label className="user-form__label" htmlFor="password">
          password
        </label>
        <br />
        <input
          type="text"
          name="password"
          id="password"
          onChange={handleUserChange}
          value={user.password}
        />
        <br />
        <button type="submit">{type}</button>
      </form>
    </>
  );
};

export default UserForm;
