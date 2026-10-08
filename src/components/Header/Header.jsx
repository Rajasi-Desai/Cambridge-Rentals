import "./Header.css";
import { House, Phone, Mail } from 'lucide-react';

const Header = () => {

    return (
        <header className="header"> 
            <div className="item brand">
                <House className="icon"/>
                <span> Cambridge Rentals </span>
            </div>
            <div className="item contact">
                <Phone className="icon"/>
                <span>111-111-1111</span>
            </div>
            <div className="item contact">
                <Mail className="icon"/>
                <span>contact@cambridgerental.com</span>
            </div>
        </header>
    );

};

export default Header;