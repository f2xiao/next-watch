import { useEffect, useState } from "react";
import "./SharedPage.scss";
import { getAllShared } from "../../utils/user";
import Nav from "../../components/Nav/Nav";

type PropType = {
  username: string;
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

const SharedPage = ({ username }: PropType) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchAllShared = async () => {
      const response = await getAllShared();
      console.log(response.data);
      setData(response.data);
    };

    fetchAllShared();
  }, []);
  return (
    <div>
      <Nav
        link1="/"
        link1_text="home"
        link2="/nextwatch"
        link2_text="nextwatch"
        username={username}
      />
      <div>
        {data.map((obj: Obj) => (
          <div key={obj.id}>
            <p>{obj.username}</p>
            <ul>
              {obj.nextwatches.map((nextwatch, index) => (
                <li className="slide-wrapper" key={nextwatch.watch_id}>
                  {/* <div>{`${index + 1}/${obj.nextwatches.length}`}</div> */}
                  <img
                    alt={`${nextwatch.title} poster`}
                    src={nextwatch.posterUrl}
                  />
                  {/* <div>${nextwatch.title}</div> */}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SharedPage;
