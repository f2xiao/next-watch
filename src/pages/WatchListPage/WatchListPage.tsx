import { useEffect, useState } from "react";
import "./WatchListPage.scss";
import axios from "axios";
import { API_URL } from "../../utils/api";
import { Link } from "react-router-dom";
import CardList from "../../components/CardList/CardList";
import UserForm from "../../components/UserForm/UserForm";

type User = {
  username: string;
  emial: string;
  nextwatches: [];
};

const WatchListPage = () => {
  const [watches, setWatches] = useState([]);
  const [user, setUser] = useState<null | User>(null);

  const getUser: (authToken: string) => void = async (authToken) => {
    const response = await axios.get(`${API_URL}/api/users`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    setUser(response.data);
  };

  useEffect(() => {
    const fetchShows = async () => {
      const response = await axios.get(`${API_URL}/api/watches`);
      setWatches(response.data);
      // console.log(response.data);
    };
    fetchShows();
  }, []);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");

    if (authToken) {
      getUser(authToken);
    }
  }, []);

  return (
    <div className="next-watch-list-page">
      {user ? (
        <>
          <div className="next-watch-list-page__user">
            <p>
              {" "}
              <Link to="/nextwatch"> nextwatch</Link>
            </p>
            <h1> {`${user.username}`} </h1>
          </div>
        </>
      ) : (
        <UserForm type="signup" />
      )}
      <CardList data={watches} />
    </div>
  );
};

export default WatchListPage;
