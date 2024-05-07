import "./WatchListPage.scss";
import Nav from "../../components/Nav/Nav";
import CardList from "../../components/CardList/CardList";

type User = {
  username: string;
  emial: string;
  share: boolean;
  nextwatches: [];
  id: string;
};
type PropTypes = {
  user: User | null;
};
const WatchListPage = ({ user }: PropTypes) => {
  return (
    <div className="next-watch-list-page">
      <Nav
        link1="/nextwatch"
        link1_text="Nextwatch"
        link2="/shared"
        link2_text="shared"
        username={user?.username}
      />
      <CardList isLoggedIn={Boolean(user)} />
    </div>
  );
};

export default WatchListPage;
