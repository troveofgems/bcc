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

export const AboutArticle = (
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
        <Dialog
            open={viewingArticle}
            onOpenChange={() => closeViewingSection("none")}
        >
            <DialogContent className={"dialogStyles"}>
                <DialogHeader>
                    <DialogTitle className={"major"}>
                        About
                    </DialogTitle>
                    <DialogDescription>
                        <span className="image main"><img src="/src/images/pic03.jpg" alt=""/></span>
                        <ScrollArea className="h-50 rounded-md border">
                            About Kyle & his services...
                        </ScrollArea>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

/*
<article id="about">
    <span className="image main"><img src="/src/images/pic03.jpg" alt=""/></span>
    <p>About Kyle & his services...</p>
</article>*/
