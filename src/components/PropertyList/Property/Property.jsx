import PropertyImage from "./PropertyImage/PropertyImage";
import "./Property.css" 

const Property = ({
    image,
    bedrooms,
    bathrooms,
    address,
    rent,
    surface,
    available,
    date,
    type,
}) => {

    return (
        <div 
            className="property-card"
            style={{opacity: !available ? "0.5" : "1"}}    
        >
            <PropertyImage image={image}>
                property details
            </PropertyImage>
            <div>
            Property attributes
            </div>
        </div>
    );
};

export default Property;