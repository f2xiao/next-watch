import "./WatchListPage.scss";
import axios from "axios";
import { API_URL } from "../../utils/api";
import { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import CardList from "../../components/CardList/CardList";

type User = {
  username: string;
  emial: string;
  share: boolean;
  nextwatches: [];
  id: string;
};

const WatchListPage = () => {
  const [user, setUser] = useState<null | User>(null);
  const getUser: (authToken: string) => void = async (authToken) => {
    const response = await axios.get(`${API_URL}/api/users`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    console.log(response.data);

    setUser(response.data);
  };
  const authToken = localStorage.getItem("authToken");
  useEffect(() => {
    if (authToken) {
      getUser(authToken);
    }
  }, [authToken]);

  return (
    <div className="next-watch-list-page">
      {user && (
        <>
          <Nav
            link1="/nextwatch"
            link1_text="Nextwatch"
            link2="/shared"
            link2_text="shared"
            username={user.username}
          />
        </>
      )}
      <CardList isLoggedIn={Boolean(user)} />
    </div>
  );
};

export default WatchListPage;
