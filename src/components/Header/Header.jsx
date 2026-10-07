import "./Header.css";
import { House, Phone, Mail } from 'lucide-react';

const Header = () => {

    return (
        <header className="header"> 
            <div>
                <House />
                <span> Cambridge Rentals </span>
            </div>
            <div>
                <Phone />
                <span>111-111-1111</span>
            </div>
            <div>
                <Mail />
                <span>contact@cambridgerental.com</span>
            </div>
        </header>
    );

};

export default Header;