import "./Card.scss";

type CardProps = {
  title: string;
  backdrop: string;
};

const Card = ({ title, backdrop }: CardProps) => {
  return (
    <div className="card">
      <img className="card__img" src={backdrop} alt={title} />
      <h2 className="card__title">{title}</h2>
    </div>
  );
};

export default Card;
