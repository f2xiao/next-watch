import "./WatchDetails.scss";
import YouTube from "react-youtube";

type Watch = {
  title: string;
  description: string;
  trailer_youtube: string;
};

type watchDetailsProps = {
  watchObj: Watch;
};

const WatchDetails = ({ watchObj }: watchDetailsProps) => {
  const { title, description, trailer_youtube } = watchObj;
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

  return (
    <div className="watch-details">
      <div className="watch-details__video">
        <YouTube videoId={trailer_youtube} opts={opts} onReady={onReady} />
      </div>
      <h2 className="watch-details__title">{title}</h2>
      <p className="watch-details__body">{description}</p>
      <button>Add to nextwatch</button>
    </div>
  );
};

export default WatchDetails;
