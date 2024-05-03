import "./CardList.scss";

import Card from "../../components/Card/Card";

type Obj = {
  id: string;
  title: string;
  backdropUrl: string;
};

type CardListProps = {
  data: Obj[];
};

const CardList = ({ data }: CardListProps) => {
  return (
    <div className="card-list">
      {data.map((obj: Obj) => (
        <div key={obj.id} className="card-list__item">
          <Card title={obj.title} backdrop={obj.backdropUrl} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
