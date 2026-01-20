"use client";
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
import {useNavigate} from "react-router-dom";
import {Button} from "../../../../components/ui/button.tsx";

export const CleaningSuppliesPolicyArticle = (
    {
        fromContactForm,
        handleAcceptedTerms
    }:
    {
        fromContactForm: boolean;
        handleAcceptedTerms: ({ acceptedForm }: { acceptedForm: string; }) => void;
    }
) => {
    const navigate = useNavigate();
    console.log("From Contact Form? ", fromContactForm);
    return (
        <Dialog open={true} modal={true} onOpenChange={fromContactForm ? () => {} : () => navigate("/")}>
            <DialogContent className={"dialogStyles"}>
                <DialogHeader>
                    <DialogTitle className={"addPadTop"}>
                        Cleaning Supplies Policy
                    </DialogTitle>
                </DialogHeader>
                <DialogDescription className={"services_description"}>
                    <ScrollArea className="h-72 rounded-md border">
                        <h4 className={"addPadTop"}>Cleaning Supplies and Tools</h4>
                        <div>
                            x
                        </div>
                    </ScrollArea>
                    {
                        fromContactForm && (
                            <Button className={"addPadTop"} type={"button"} onClick={() => {
                                console.log("Terms Accepted!");
                                handleAcceptedTerms({ acceptedForm: "csp" });
                            }}>Accept Terms</Button>
                        )
                    }
                </DialogDescription>
            </DialogContent>
        </Dialog>
    )
}