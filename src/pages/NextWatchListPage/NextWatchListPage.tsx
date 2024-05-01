import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import "./NextWatchListPage.scss";
import axios from "axios";
import { API_URL } from "../../utils/api";

type Obj = {
  id:string, 
  title:string, 
  backdropUrl:string,
}

const NextWatchListPage = () => {
  const [data, setData] = useState([])

  useEffect(() => { 

    const fetchShows = async () => { 
      const response = await axios.get(`${API_URL}/api/watches`);
      setData(response.data);
      console.log(response.data);
     }
     fetchShows();

   },[])
  return (
  <div className="next-watch-list-page">
    <div className="next-watch-list-page__cards">
      {data.map((obj : Obj) => <Card className="next-watch-list-page__card" key={obj.id} title={obj.title} backdrop={obj.backdropUrl} />)}
    </div>
  </div>
  );
};

export default NextWatchListPage;
