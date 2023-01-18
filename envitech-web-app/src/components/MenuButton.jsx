import "../styles/MenuButton.css";

const MenuButton = ({ onClick, text }) => {
  return (
    <button className="menu-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default MenuButton;
