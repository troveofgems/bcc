import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "../../../../components/ui/dialog.tsx";
import {
    ScrollArea
} from "../../../../components/ui/scroll-area.tsx";

import Image1 from "../../../../images/pic01.jpg";
import {useNavigate} from "react-router-dom";

export const PricingArticle = () => {
    const navigate = useNavigate();
    return (
        <Dialog open={true} modal={true} onOpenChange={() => navigate("/")}>
            <DialogContent className={"dialogStyles"}>
                <DialogHeader>
                    <DialogTitle className={"major"}>
                        Pricing
                    </DialogTitle>
                    <DialogDescription className={"pricing_description"}>
                        Bare & Clean Co. provides structured, time-based residential cleaning for private clients.
                        Rates reflect service scope, discretion, and elevated standards. Final pricing may vary based
                        on residence size, layout, and service frequency.
                        <ScrollArea className="h-68 border">
                            <span className="image main"><img src={Image1} alt=""/></span>
                            <div>
                                <div>
                                    Foundation 1 Hour
                                    <div>
                                        <i>
                                            Includes Foundation Services.
                                        </i>
                                    </div>
                                    <ul className={"collapseMargins"}>
                                        <li>
                                            $125 for Underwear (Uniform)
                                        </li>
                                        <li>
                                            $200 for Nude
                                        </li>
                                    </ul>
                                </div>
                                <div className={"addPadTop"}>
                                    Elevated 2 Hours
                                    <div>
                                        <i>
                                            Includes Elevated and Foundation Services.
                                        </i>
                                    </div>
                                    <ul className={"collapseMargins"}>
                                        <li>
                                            $200 for Underwear (Uniform)
                                        </li>
                                        <li>
                                            $300 for Nude
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
