const Button = ({ text, onClick }) => {
    return (
      <button className="Button buttonA" onClick={onClick}>
        <span className="Button__inner">{text}</span>
      </button>
    );
  };
  
  export default Button;
  