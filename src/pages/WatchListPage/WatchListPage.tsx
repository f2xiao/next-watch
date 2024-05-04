import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import "./WatchListPage.scss";
import axios from "axios";
import { API_URL } from "../../utils/api";
import { Link } from "react-router-dom";
type Obj = {
  id: string;
  title: string;
  backdropUrl: string;
};

const WatchListPage = () => {
  const [data, setData] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  const getUserInfo: (authToken: string) => void = async (authToken) => {
    const response = await axios.get(`${API_URL}/api/users`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    setUserInfo(response.data);
  };

  useEffect(() => {
    const fetchShows = async () => {
      const response = await axios.get(`${API_URL}/api/watches`);
      setData(response.data);
      // console.log(response.data);
    };
    fetchShows();
  }, []);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");

    if (authToken) {
      getUserInfo(authToken);
    }
  }, []);

  return (
    <div className="next-watch-list-page">
      {userInfo.username && (
        <div className="next-watch-list-page__user">
          <p>
            {" "}
            <Link to="/nextwatch"> nextwatch</Link>
          </p>
          <h1> {`${userInfo.username}`} </h1>
        </div>
      )}

      <div className="next-watch-list-page__cards">
        {data.map((obj: Obj) => (
          <div key={obj.id} className="next-watch-list-page__wrapper">
            <Link to={`/watches/${obj.id}`}>
              <Card title={obj.title} backdrop={obj.backdropUrl} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchListPage;
