import '../css/TextField.css';

function TextField({ type, placeholder, label }) {
    const sizeClass = type === "short" ? 'tf_short' : type === "long" ? "tf_long" : "";

    return (
        <div className="text_field_wrapper">
            <label>{label}</label>
            <input 
                type="text" 
                placeholder={placeholder} 
                className={sizeClass} 
            />
        </div>
    );
}

export default TextField