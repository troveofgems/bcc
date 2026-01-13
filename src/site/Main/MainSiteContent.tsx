import {AboutArticle} from "./articles/About/About.Article.tsx";
import {ContactArticle} from "./articles/Contact/Contact.Article.tsx";
import {PricingArticle} from "./articles/Pricing/Pricing.Article.tsx";
import {ServicesArticle} from "./articles/Services/Services.Article.tsx";
import type {Dispatch, SetStateAction} from "react";

export const MainSiteContent = (
    {
        viewingSection,
        setViewingSection,
    }:
    {
        viewingSection: string;
        setViewingSection: Dispatch<SetStateAction<string>>
    }
) => {
    return (
        <div id={"main"}>
            <ServicesArticle
                viewingArticle={viewingSection === "Services"}
                closeViewingSection={setViewingSection}
            />
            <PricingArticle
                viewingArticle={viewingSection === "Pricing"}
                closeViewingSection={setViewingSection}
            />
            <ContactArticle
                viewingArticle={viewingSection === "Contact"}
                closeViewingSection={setViewingSection}
            />
            <AboutArticle
                viewingArticle={viewingSection === "About"}
                closeViewingSection={setViewingSection}
            />
        </div>
    )
};