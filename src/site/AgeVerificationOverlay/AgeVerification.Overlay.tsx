"use client";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "../../components/ui/dialog.tsx";
import {
    ScrollArea
} from "../../components/ui/scroll-area.tsx";
import {useNavigate} from "react-router-dom";
import {Button} from "../../components/ui/button.tsx";
import type {Dispatch, SetStateAction} from "react";

export const AgeVerificationOverlay = (
    {
        acceptedAgeVerification,
        setAcceptedAgeVerification,
    }:
    {
        acceptedAgeVerification: boolean;
        setAcceptedAgeVerification:  Dispatch<SetStateAction<boolean>>
    }
) => {
    const navigate = useNavigate();
    return (
        <Dialog open={!acceptedAgeVerification} modal={true}>
            <DialogContent className={"dialogStyles"} showCloseButton={false}>
                <DialogHeader>
                    <DialogTitle className={"addPadTop"}>
                        Age Verification
                    </DialogTitle>
                </DialogHeader>
                <DialogDescription className={"services_description"}>
                    <ScrollArea className="h-72 rounded-md border">
                        <div>
                            To enter this site and request its services you must be 18 years of age or older.
                            You will be asked for your ID by the cleaner upon arrival. Please be prepared to show
                            your ID. Your ID must match the information that was provided to set up the appointment.
                        </div>
                    </ScrollArea>
                    <div className={"flex flex-row justify-between ageVerificationButtons"}>
                        <Button
                            className={"addPadTop"}
                            type={"button"}
                            onClick={() => navigate("https://www.google.com")}>
                            Take me away
                        </Button>
                        <Button
                            className={"addPadTop"}
                            type={"button"}
                            onClick={() => setAcceptedAgeVerification(true)}>
                            Proceed to Site
                        </Button>
                    </div>
                </DialogDescription>
            </DialogContent>
        </Dialog>
    )
}