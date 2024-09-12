import "./CardList.scss";
import React, { useEffect, useState, Suspense } from "react";
// import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import { getAll } from "../../utils/watch";

const LazyCard = React.lazy(() => import("../../components/Card/Card"));

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
      const response = await getAll();
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
              <Suspense
                fallback={<div className="card-list__loading">Loading...</div>}
              >
                <LazyCard title={obj.title} backdrop={obj.backdropUrl} />
              </Suspense>
            </Link>
          ) : (
            <Suspense
              fallback={<div className="card-list__loading">Loading...</div>}
            >
              <LazyCard title={obj.title} backdrop={obj.backdropUrl} />
            </Suspense>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardList;
