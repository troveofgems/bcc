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
import type {Dispatch, SetStateAction} from "react";

import Image2 from "../../../../images/pic02.jpg";

export const ServicesArticle = (
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
                        Services
                    </DialogTitle>
                    <DialogDescription>
                        Services are subject to modification
                        <span className="image main"><img src={Image2} alt=""/></span>
                        <ScrollArea className="h-50 rounded-md border paddingTopL">
                            <p>
                                Regular Services
                            </p>
                            <p>Additional Services</p>
                        </ScrollArea>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}