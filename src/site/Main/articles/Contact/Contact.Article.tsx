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
import {ContactForm} from "./Contact.Form.tsx";
import {useNavigate} from "react-router-dom";

export const ContactArticle = () => {
    const navigate = useNavigate();
    return (
        <Dialog open={true} modal={true} onOpenChange={() => navigate("/")}>
            <DialogContent className={"dialogStyles"}>
                <DialogHeader>
                    <DialogTitle className="major">
                        Contact
                    </DialogTitle>
                    <DialogDescription className={"contact_description"}>
                        Bare & Clean Co. accepts new clients by referral only to maintain discretion, consistency, and
                        service standards.
                    </DialogDescription>
                </DialogHeader>
                <ScrollArea className="h-72 rounded-md border paddingTopL">
                    <ContactForm key={"contact_form"} />
                </ScrollArea>
            </DialogContent>
        </Dialog>
    )
};