import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "../../../../ui/dialog";
import type {Dispatch, SetStateAction} from "react";
import {
    ScrollArea
} from "../../../../ui/scroll-area";
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
                    <DialogTitle>
                        <h2 className="major">Contact</h2>
                    </DialogTitle>
                    <DialogDescription>
                        Bare & Clean Co. accepts new clients by referral only to maintain discretion, consistency, and
                        service standards.
                        <ScrollArea className="h-72 rounded-md border paddingTopL">
                            <ContactForm />
                        </ScrollArea>
                        <ul className="icons">
                            <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                            <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                        </ul>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
};