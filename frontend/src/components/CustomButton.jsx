import '../css/CustomButton.css';

function CustomButton({ text, variant }) {
    let type = "";
    if (variant === "primary") {
        type = "button-primary";
    } else if (variant === "secondary") {
        type = "button-secondary";
    } else if (variant === "tertiary") {
        type = "button-tertiary";
    } else if (variant === "golden") {
        type = "button-golden";
    } else if (variant === "transparent") {
        type = "button-transparent";
    }

    return (
        <div>
            <button className={`button ${type}`}>{ text }</button>
        </div>
    )
}

export default CustomButton