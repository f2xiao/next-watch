import { useEffect, useState } from "react";
import "./NextWatchPage.scss";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import Button from "../../components/Button/Button";
import {
  deleteOne,
  getAll,
  updateNextwatchRating,
} from "../../utils/nextwatch";
import { updateShare } from "../../utils/user";
import RatingRange from "../../components/RatingRange/RatingRange";

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
  user: User | null;
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
  const [newRating, setNewRating] = useState("");

  const fetchNextWatches = async () => {
    try {
      const response = await getAll();

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
      await deleteOne(id);
      // console.log(response);
      fetchNextWatches();
    } catch (error) {
      console.log("can not delete", error);
    }
  };

  const shareNextWatch = async () => {
    try {
      await updateShare();
      if (user) {
        const newUser = { ...user, share: !user.share };
        updateUser(newUser);
      }
    } catch (error) {
      console.log("can't share", error);
    }
  };

  const updateRating = async (id: string) => {
    console.log(id);
    try {
      console.log("rating", newRating);

      updateNextwatchRating(id, { rating: newRating });
      // fetchNextWatches();
    } catch (error) {
      console.log("can't update the rating", error);
    }
  };
  const updateValue = (value: string) => {
    console.log("value", value);
    setNewRating(value);
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
                  <td>
                    <RatingRange
                      initialValue={obj.rating}
                      updateValue={updateValue}
                    />
                  </td>
                  <td>
                    <Button
                      text="update"
                      handleClick={() => {
                        updateRating(obj.id);
                      }}
                    />
                  </td>
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
