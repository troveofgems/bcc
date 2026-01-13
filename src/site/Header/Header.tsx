import '@/assets/css/fontawesome-all.min.css';
import '@/assets/css/main.css';
import '@/assets/css/noscript.css';
import type {Dispatch, SetStateAction} from "react";

export const Header = (
    {
        setViewingSection,
    }:
    {
        setViewingSection: Dispatch<SetStateAction<string>>
    }
) => {
    return (
        <header id={"header"}>
            <div className="logo">
                <span className="icon fa-gem"></span>
            </div>
            <div className="content">
                <div className="inner">
                    <h1>Bare & Clean Co.</h1>
                    <p>Private, referral-based cleaning services. All information is handled confidentially.</p>
                </div>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#" onClick={() => setViewingSection("Services")}>Services</a>
                    </li>
                    <li>
                        <a href="#" onClick={() => setViewingSection("Pricing")}>Pricing</a>
                    </li>
                    <li>
                        <a href="#" onClick={() => setViewingSection("Contact")}>Contact</a>
                    </li>
                    <li>
                        <a href="#" onClick={() => setViewingSection("About")}>About</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};