import axios from "axios";
import Button from "../Button/Button";
import "./WatchDetails.scss";
import YouTube from "react-youtube";
import { API_URL } from "../../utils/api";
import { useEffect, useState } from "react";

type Watch = {
  id: string;
  description: string;
  trailer_youtube: string;
  title: string;
};

type watchDetailsProps = {
  watchObj: Watch;
};

const WatchDetails = ({ watchObj }: watchDetailsProps) => {
  const { id, title, description, trailer_youtube } = watchObj;
  const [nextwatchId, setNextWatchId] = useState<string>("");

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    const fetchNextWatches = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/api/nextwatches/watch/${id}`,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        console.log("fetching...", response.data.id);

        if (response.status === 200) {
          setNextWatchId(response.data.id);
        }
      } catch (error) {
        console.log("it's not in the nextwatch list", error);
      }
    };

    fetchNextWatches();
  }, [id]);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const onReady: (e: React.SyntheticEvent) => void = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const addToNextWatch = async (id: string) => {
    try {
      const response = await axios.post(
        `${API_URL}/api/nextwatches`,
        { watch_id: id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      console.log("added", response.data.id);

      setNextWatchId(response.data.id);
    } catch (error) {
      console.log("can not add the nextwatch", error);
    }
  };

  const removeFromNextwatch = async (id: string) => {
    try {
      const response = await axios.delete(`${API_URL}/api/nextwatches/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
      console.log("removed", response);
      setNextWatchId("");
    } catch (error) {
      console.log("can not delete the nextwatch", error);
    }
  };

  return (
    <div className="watch-details">
      <h1 className="watch-details__title">{title}</h1>
      <div className="watch-details__video">
        <YouTube videoId={trailer_youtube} opts={opts} onReady={onReady} />
      </div>
      <h2 className="watch-details__subtitle">Description</h2>
      <p className="watch-details__body">{description}</p>
      <div className="watch-details__button">
        {nextwatchId ? (
          <Button
            text="remove from nextwatch"
            handleClick={() => {
              removeFromNextwatch(nextwatchId);
            }}
          />
        ) : (
          <Button
            text="add to nextwatch"
            handleClick={() => {
              addToNextWatch(watchObj.id);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default WatchDetails;
