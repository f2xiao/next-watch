import { useEffect, useState } from "react";
import "./NextWatchPage.scss";
import { API_URL } from "../../utils/api";
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import Button from "../../components/Button/Button";
import { deleteOne } from "../../utils/nextwatch";
import { updateShare } from "../../utils/user";

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
  user: User;
  updateUser: (updatedUser: User) => void;
};

type User = {
  username: string;
  emial: string;
  share: boolean;
  nextwatches: [];
  id: string;
};

const NextWatchPage = ({ user, updateUser }: PropTypes) => {
  const [nextwatches, setNextwatches] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const fetchNextWatches = async () => {
    const authToken = localStorage.getItem("authToken");
    try {
      const response = await axios.get(`${API_URL}/api/nextwatches`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.status === 200) {
        // console.log(response.data);
        setNextwatches(response.data);
        setIsFetching(false);
      }
    } catch (error) {
      console.log("can't get nextwatches", error);
    }
  };
  useEffect(() => {
    fetchNextWatches();
  }, []);

  const deleteNextWatch = async (id: string) => {
    console.log(id);
    try {
      const response = await deleteOne(id);
      // console.log(response);
      fetchNextWatches();
    } catch (error) {
      console.log("can not delete", error);
    }
  };

  const shareNextWatch = async () => {
    try {
      await updateShare();
      updateUser({ ...user, share: !user.share });
    } catch (error) {
      console.log("can't share", error);
    }
  };

  return (
    <div>
      <Nav
        link1="/watches"
        link1_text="Home"
        link2="/shared"
        link2_text="shared"
        username={user?.username}
      />
      <h1>NexWatch</h1>
      {isFetching ? (
        <p>...Loading data...</p>
      ) : (
        <>
          {" "}
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Rating</th>
                <th>Action</th>
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
                    <Button
                      text="remove"
                      handleClick={() => {
                        deleteNextWatch(obj.id);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="nextwatch-page__button">
            {user?.share ? (
              <Button
                text="unshare"
                handleClick={() => {
                  shareNextWatch();
                }}
              />
            ) : (
              <Button
                text="share"
                handleClick={() => {
                  shareNextWatch();
                }}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default NextWatchPage;
