import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import "./NextWatchListPage.scss";
import axios from "axios";
import { API_URL } from "../../utils/api";


const NextWatchListPage = () => {
  const [data, setData] = useState([])

  useEffect(() => { 

    const fetchShows = async () => { 
      const response = await axios.get(`${API_URL}/api/tmdb`);
      setData(response.data);
      console.log(response.data);

     }
     fetchShows();

   },[])
  return (
  <div className="next-watch-list-page">
    <div className="next-watch-list-page__cards">
    {data.map((obj) => <Card className="next-watch-list-page__card" key={obj.TMDB_id} title={obj.title} backdrop={obj.backdrop} />)}
    </div>
  </div>
  );
};

export default NextWatchListPage;
