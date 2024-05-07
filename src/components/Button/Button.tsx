import "./Button.scss";

type PropTypes = {
  text: string;
  handleClick: () => void;
};

const Button = ({ text, handleClick }: PropTypes) => {
  return (
    <button className="button" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
