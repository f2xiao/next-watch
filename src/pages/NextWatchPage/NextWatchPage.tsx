import { useEffect, useState } from "react";
import "./NextWatchPage.scss";
import { API_URL } from "../../utils/api";
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav/Nav";

type Watch = {
  id: string;
  category: string;
  title: string;
};

type Obj = {
  id: string;
  watch_id: Watch;
  rating: number;
};

type PropTypes = {
  username: string;
};

const NextWatchPage = ({ username }: PropTypes) => {
  const [nextwatches, setNextwatches] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    const fetchNextWatches = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/nextwatches`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        if (response.status === 200) {
          console.log(response.data);
          setNextwatches(response.data);
          setIsFetching(false);
        }
      } catch (error) {
        console.log("can't get nextwatches", error);
      }
    };

    fetchNextWatches();
  }, []);

  if (isFetching) {
    return <p>...Loading nextwatch data...</p>;
  }

  return (
    <div>
      <Nav
        link1="/watches"
        link1_text="Home"
        link2="/"
        link2_text=""
        username={username}
      />
      <h1>NexWatch</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {nextwatches.map((obj: Obj) => (
            <tr key={obj.id}>
              <td>
                <Link to={`/watches/${obj.watch_id.id}`}>
                  {obj.watch_id.title}
                </Link>
              </td>
              <td>{obj.rating}</td>
              <td>
                <button>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NextWatchPage;
