import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "../../../../ui/dialog";
import {
    ScrollArea
} from "../../../../ui/scroll-area";
import type {Dispatch, SetStateAction} from "react";

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
                        <span className="image main"><img src="/src/images/pic01.jpg" alt=""/></span>
                        <ScrollArea className="h-72 rounded-md border">
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