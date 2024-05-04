import { useParams } from "react-router-dom";
import WatchDetails from "../../components/WatchDetails/WatchDetails";
import "./WatchDetailsPage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/api";

const WatchDetailsPage = () => {
  const [data, setData] = useState({});
  const [isFetching, setIsFetching] = useState(true);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/watches/${id}`);
        console.log(response.data);
        setData(response.data);
        setIsFetching(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (isFetching) {
    return <p>... Loading data ...</p>;
  }

  return (
    <div>
      <WatchDetails watchObj={data} />
    </div>
  );
};

export default WatchDetailsPage;
