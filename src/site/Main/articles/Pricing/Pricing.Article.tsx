import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "../../../../components/ui/dialog.tsx";
import type {Dispatch, SetStateAction} from "react";
import {
    ScrollArea
} from "../../../../components/ui/scroll-area.tsx";

export const PricingArticle = (
    {
        viewingArticle,
        closeViewingSection,
    }:
    {
        viewingArticle: boolean;
        closeViewingSection: Dispatch<SetStateAction<string>>;
    }
) => {
    return (
        <Dialog open={viewingArticle} modal={true} onOpenChange={() => closeViewingSection("none")}>
            <DialogContent className={"dialogStyles"}>
                <DialogHeader>
                    <DialogTitle className={"major"}>
                        Pricing
                    </DialogTitle>
                    <DialogDescription>
                        <span className="image main"><img src="/src/images/pic02.jpg" alt=""/></span>
                        <ScrollArea className="h-50 border">
                            <div>
                                <div>
                                    <p>Basic 1 Hour - $125</p>
                                    <ul>
                                        <li>
                                            Surface dusting, vacuuming, kitchen & bathroom surface cleaning, and trash removal.
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p>Standard 2 Hours - $200</p>
                                    <ul>
                                        <li>
                                            Includes basic services with extended attention to kitchens, bathrooms, floor care, and light
                                            (fixture?) detailing.
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p>Premium 3 Hours - $300</p>
                                    <ul>
                                        <li>
                                            Comprehensive cleaning with focused attention on high-traffic areas, detailed surfaces, and
                                            overall presentation.
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p>Nude - $75</p>
                                    <ul>
                                        <li>
                                            Conducted professionally and discreetly through-out the appointment.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </ScrollArea>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

/*
<article id="pricing">

</article>*/
