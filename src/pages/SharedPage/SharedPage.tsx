import { useEffect, useState } from "react";
import "./SharedPage.scss";
import { getAllShared } from "../../utils/user";
import Nav from "../../components/Nav/Nav";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

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

type Obj = {
  id: string;
  nextwatches: Watch[];
  username: string;
};

type Watch = {
  id: string;
  posterUrl: string;
  title: string;
  watch_id: string;
};

const SharedPage = ({ user }: PropType) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    const fetchAllShared = async () => {
      const response = await getAllShared();
      // console.log(response.data);
      setData(response.data);
      setIsFetching(false);
    };

    fetchAllShared();
  }, []);

  return (
    <div className="shared-page">
      <Nav
        linkArray={[
          { link: "/", text: "home" },
          { link: "/nextwatch", text: "nextwatch" },
        ]}
        username={user?.username}
      />
      {isFetching ? (
        <p>...Loading data...</p>
      ) : (
        <div>
          {data.map((obj: Obj) => (
            <div key={obj.id}>
              <p className="shared-page__username">{`from ${
                obj.username === user?.username ? "me" : obj.username
              }`}</p>
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
              >
                {obj.nextwatches.map((nextwatch) => (
                  // <li
                  //   key={nextwatch.watch_id}
                  //   style={{ width: `${100 / obj.nextwatches.length}%` }}
                  // >
                  //   <Link to={`/watches/${nextwatch.watch_id}`}>
                  //     <img
                  //       className="shared-page__img"
                  //       alt={`${nextwatch.title} poster`}
                  //       src={nextwatch.posterUrl}
                  //     />
                  //   </Link>
                  // </li>

                  <SwiperSlide key={nextwatch.watch_id}>
                    <Link to={`/watches/${nextwatch.watch_id}`}>
                      <img
                        className="shared-page__img"
                        alt={`${nextwatch.title} poster`}
                        src={nextwatch.posterUrl}
                      />
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SharedPage;
