import "./PropertyAttribute.css";
import "../../../../App.css";

const PropertyAttribute = ({ text, color="var(--color-dark)", bold}) => {
    const style = { color, fontWeight: bold ? "bold" : "normal" };
    return (
        <p 
            className="property-attribute"
            style={style}
        >
            {text}
        </p>
    );

};

export default PropertyAttribute;