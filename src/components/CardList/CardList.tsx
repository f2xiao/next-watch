import "./CardList.scss";
import axios from "axios";
import { API_URL } from "../../utils/api";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";

type Obj = {
  id: string;
  title: string;
  backdropUrl: string;
};

const CardList = ({ isLoggedIn }) => {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const response = await axios.get(`${API_URL}/api/watches`);
      setWatches(response.data);
      // console.log(response.data);
    };
    fetchShows();
  }, []);
  return (
    <div className="card-list">
      {watches.map((obj: Obj) => (
        <div key={obj.id} className="card-list__item">
          {isLoggedIn ? (
            <Link to={`/watches/${obj.id}`}>
              <Card title={obj.title} backdrop={obj.backdropUrl} />
            </Link>
          ) : (
            <Card title={obj.title} backdrop={obj.backdropUrl} />
          )}
        </div>
      ))}
    </div>
  );
};

export default CardList;
