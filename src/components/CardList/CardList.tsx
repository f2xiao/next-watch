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
type PropTypes = {
  isLoggedIn: boolean;
};

const CardList = ({ isLoggedIn }: PropTypes) => {
  const [watches, setWatches] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchShows = async () => {
      const response = await axios.get(`${API_URL}/api/watches`);
      setWatches(response.data);
      setIsFetching(false);
      // console.log(response.data);
    };
    fetchShows();
  }, []);

  if (isFetching) {
    return <p>...Loading data...</p>;
  }

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
