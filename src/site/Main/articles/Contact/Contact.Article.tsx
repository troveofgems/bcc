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
import {ContactForm} from "./Contact.Form.tsx";

export const ContactArticle = (
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
                    <DialogTitle className="major">
                        Contact
                    </DialogTitle>
                    <DialogDescription className={"contact_description"}>
                        Bare & Clean Co. accepts new clients by referral only to maintain discretion, consistency, and
                        service standards.
                        <ScrollArea className="h-72 rounded-md border paddingTopL">
                            <ContactForm />
                        </ScrollArea>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
};