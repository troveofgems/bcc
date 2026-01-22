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
                            Clients are required to provide their own cleaning products, supplies,
                            and tools. The client also relinquishes Bare & Clean Co. and its cleaners from any
                            responsibility resulting from cleaning product damage - it is the Client's responsibility
                            to ensure that all products provided are safe and appropriate for home surfaces and floors.
                        </div>
                    </ScrollArea>
                    {
                        fromContactForm && (
                            <Button className={"addPadTop"} type={"button"} onClick={() => {
                                handleAcceptedTerms({ acceptedForm: "csp" });
                            }}>Accept Terms</Button>
                        )
                    }
                </DialogDescription>
            </DialogContent>
        </Dialog>
    )
}