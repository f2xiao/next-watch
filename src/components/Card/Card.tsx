import "./Card.scss";

type CardProps = {
  title: string;
  backdrop: string;
};

const Card = ({ title, backdrop }: CardProps) => {
  return (
    <div className="card">
      <img
        className="card__img"
        src={backdrop}
        alt="poster"
        loading="lazy"
        width="500"
        height="281"
        style={{ maxWidth: "100vw" }}
      />
      <h2 className="card__title">{title}</h2>
    </div>
  );
};

export default Card;
