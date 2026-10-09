import "./Footer.css" 
import { Clock } from 'lucide-react';

const Footer = () => {
    const openingHour = 9;
    const closingHour = 17;
    const now = new Date();
    const currentHour = now.getHours();
    const currentDay = now.getDay();    // sunday = 0; saturday = 6; M-F = 1-5
    const isWeekDay = currentDay >= 1 && currentDay <= 5;
    const isOpen = isWeekDay && currentHour >= openingHour && currentHour < closingHour;

    const openElement = (
        <>
            {/* Open status */}
            <div className="message">
                <Clock className="icon" />
                <span className="status open">We are open now!</span>
            </div>
            {/* contact info */}
            <div className="second-line">
                Call us at:<strong> (111) 111-1111 </strong>
            </div>
        </>
    );

    const closedElement = (
        <>
            {/* Closed status */}
            <div className="message">
                <Clock className="icon" />
                <span className="status closed">We are closed now.</span>
            </div>
            {/* Agency hours */}
            <div className="second-div">
                Opening Hours: Monday to Friday, {openingHour}:00 to {closingHour}:00
            </div>
        </>
    );

    return (
        <footer className="footer">
            {isOpen ? openElement : closedElement}
        </footer>
    );

};

export default Footer;