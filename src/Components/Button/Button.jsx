
const Button = ({text}) => {
    return (
        <div>
            <a className="Button buttonA">
                <span className="Button__inner"> {text} </span>
            </a>
        </div>
    );
};

export default Button;