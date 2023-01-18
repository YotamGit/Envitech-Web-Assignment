import "../styles/OptionButton.css";

const OptionButton = ({ onClick, text }) => {
  return (
    <button className="option-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default OptionButton;
