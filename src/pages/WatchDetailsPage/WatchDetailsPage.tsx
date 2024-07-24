import { useParams } from "react-router-dom";
import WatchDetails from "../../components/WatchDetails/WatchDetails";
import "./WatchDetailsPage.scss";
import { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import { getOne } from "../../utils/watch";

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
        const response = await getOne(id);
        setData(response.data);

        setIsFetching(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  if (isFetching) {
    return (
      <div className="watch-details-page">
        <Nav
          linkArray={[
            { link: "/watches", text: "Home" },
            { link: "/nextwatch", text: "nextwatch" },
            { link: "/shared", text: "shared" },
          ]}
          username={user?.username}
        />
        <p>... Loading data ...</p>
      </div>
    );
  }

  return (
    <div className="watch-details-page">
      <Nav
        linkArray={[
          { link: "/watches", text: "Home" },
          { link: "/nextwatch", text: "nextwatch" },
          { link: "/shared", text: "shared" },
        ]}
        username={user?.username}
      />
      <WatchDetails watchObj={data} />
    </div>
  );
};

export default WatchDetailsPage;
