import "./Button.scss";

type PropTypes = {
  className?: string;
  text: string;
  handleClick: () => void;
};

const Button = ({ className = "button", text, handleClick }: PropTypes) => {
  return (
    <button className={className} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
