import {Link} from "react-router-dom";

export const Footer = () => (
    <footer id="footer">
        <p className="copyright">
            Bare & Clean Co. - 2026
        </p>
        <div className={"flex flex-col items-center"}>
            <Link to={"/termsAndConditions"} className={"copyright w-fit"}>Terms and Conditions</Link>
            <Link to={"/cleaningSuppliesPolicy"} className={"copyright w-fit"}>Cleaning Supplies Policy</Link>
        </div>
        <p className={"copyright addMarginTop"}>
            Site Facilitator: <a href="https://thetroveofgems.tech" target={"_blank"} referrerPolicy={"no-referrer"}>ToG</a>.
        </p>
    </footer>
);