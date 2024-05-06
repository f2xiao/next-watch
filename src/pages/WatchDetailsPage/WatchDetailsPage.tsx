import { useParams } from "react-router-dom";
import WatchDetails from "../../components/WatchDetails/WatchDetails";
import "./WatchDetailsPage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/api";
import Nav from "../../components/Nav/Nav";

type User = {
  username: string;
  emial: string;
  share: boolean;
  nextwatches: [];
  id: string;
};

type PropType = {
  user: User | null;
};

const WatchDetailsPage = ({ user }: PropType) => {
  const [data, setData] = useState({
    id: "",
    title: "",
    description: "",
    trailer_youtube: "",
  });

  const [isFetching, setIsFetching] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/watches/${id}`);
        setData(response.data);

        setIsFetching(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  if (isFetching) {
    return <p>... Loading data ...</p>;
  }

  return (
    <div>
      <Nav
        link1="/watches"
        link1_text="Home"
        link2="/nextwatch"
        link2_text="Nextwatch"
        username={user?.username}
      />
      <WatchDetails watchObj={data} />
    </div>
  );
};

export default WatchDetailsPage;
