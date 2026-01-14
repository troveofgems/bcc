import type {Dispatch, SetStateAction} from "react";

export const Footer = (
    {
        setViewingSection,
    }:
    {
        setViewingSection: Dispatch<SetStateAction<string>>
    }
) => (
    <footer id="footer">
        <p className="copyright">
            Bare & Clean Co. - 2026
        </p>
        <p>
            <a href={"#"} onClick={() => setViewingSection("TermsAndConditions")} className={"copyright"}>Terms and Conditions</a>
        </p>
        <p className={"copyright"}>
            Site Facilitator: <a href="https://thetroveofgems.tech" target={"_blank"} referrerPolicy={"no-referrer"}>ToG</a>.
        </p>
    </footer>
);