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

export const TermsAndConditionsArticle = (
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
                    <DialogTitle className={"major addPadTop"}>
                        Terms And Conditions
                    </DialogTitle>
                    <DialogDescription className={"services_description"}>

                        <ScrollArea className="h-72 rounded-md border">
                            <h4 className={"addPadTop"}>Termination of Service</h4>
                            <div>
                                Termination of Service is dependent on the cleaner's safety and comfort while completing
                                services for a Bare & Clean Co. Client. Termination of Service will result in services
                                ending immediately and without a refund.
                            </div>
                            <h4 className={"addPadTop"}>Sexual Harassment</h4>
                            <div>
                                Bare & Clean Co. Clients are strictly prohibited from initiating any form of sexual
                                harassment or abuse, including but not limited to: verbal harassment, masturbation of
                                any form in front of the cleaners. Violating these rules will result in immediate
                                termination of service.
                            </div>
                            <h4 className={"addPadTop"}>Prohibited Contact</h4>
                            <div>
                                Bare & Clean Co. Clients are strictly prohibited from physically touching a cleaner at
                                any point during service. Violating this rule will result in immediate termination
                                of service.
                            </div>
                            <h4 className={"addPadTop"}>Photography or Video</h4>
                            <div>
                                Bare & Clean Co. Clients are strictly prohibited from taking any video or photography
                                of the cleaners without their express consent. Violating this rule will result in
                                immediate termination of service.
                            </div>
                            <h4 className={"addPadTop"}>Payment and Refunds</h4>
                            <div>
                                Bare & Clean Co. Clients must pay in cash upfront before the service starts. Cash
                                must be in the exact amount and be prepared to provide it to the cleaner upon arrival.
                                Please read Cancellations for further restrictions on refunds.
                            </div>
                            <h4 className={"addPadTop"}>Cancellations</h4>
                            <div>
                                Cleaners have the right to terminate the service without any refund at any time if they
                                feel uncomfortable or unsafe. Clients must provide at least a 24-Hour notice of cancellation
                                to receive a full refund. If clients fail to provide proper notice, no refunds will
                                be issued.
                            </div>
                        </ScrollArea>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}