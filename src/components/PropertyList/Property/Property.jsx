import "./Property.css" 
import "../../../App.css"
import PropertyImage from "./PropertyImage/PropertyImage";
import PropertyTypeLabel from "./PropertyImage/PropertyTypeLabel/PropertyTypeLabel";
import PropertyBanner from "./PropertyImage/PropertyBanner/PropertyBanner";
import IconWithText from "./PropertyImage/IconWithText/IconWithText";
import PropertyAttribute from "./PropertyAttribute/PropertyAttribute";
import { Bed, Bath, Maximize } from 'lucide-react';

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
                <PropertyTypeLabel type={type} />
                {!available && <PropertyBanner />}
                <div className="property-info">
                    <IconWithText 
                        Icon={Bed}
                        text={bedrooms}
                    />
                    <span>|</span>
                    <IconWithText 
                        Icon={Bath}
                        text={bathrooms}
                    />
                    <span>|</span>
                    <IconWithText 
                        Icon={Maximize}
                        text={`${surface} m²`}
                    />
                </div>
            </PropertyImage>
            <PropertyAttribute text={address} />
            <PropertyAttribute 
                text={`$${rent} / month`} 
                color="var(--color-primary)"
                bold
            />
            <PropertyAttribute text={`Available from ${date}`} />
        </div>
    );
};

export default Property;