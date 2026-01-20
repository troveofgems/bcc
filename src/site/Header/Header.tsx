import '@assets/css/fontawesome-all.min.css';
import '@assets/css/main.css';
import '@assets/css/noscript.css';
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <header id={"header"}>
            <div className="logo">
                <span className="icon fa-gem"></span>
            </div>
            <div className="content">
                <div className="inner">
                    <h1>Bare & Clean Co.</h1>
                    <p>Private, referral-based cleaning services in the PHX Area. All information is handled confidentially.</p>
                </div>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/pricing">Pricing</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};