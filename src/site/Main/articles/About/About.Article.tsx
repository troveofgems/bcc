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

export const AboutArticle = () => {
    const navigate = useNavigate();
    return (
        <Dialog
            open={true}
            onOpenChange={() => navigate("/")}
        >
            <DialogContent className={"dialogStyles"}>
                <DialogHeader>
                    <DialogTitle className={"major"}>
                        About
                    </DialogTitle>
                    <DialogDescription className={"about_description"}>
                        {/*<span className="image main"><img src={Image3} alt=""/></span>*/}
                        <ScrollArea className="h-68 rounded-md border addPad">
                            <div>
                                <div className={"addPadTop"}>
                                    Bare & Clean Co. is a private, boutique residential cleaning service designed for clients
                                    who value discretion, consistency, and elevated standards. We provide structured, time-based
                                    cleaning services tailored to each residence and delivered with a refined, intentional
                                    presence.
                                </div>
                                <div className={"addPadTop"}>
                                    While our presentation options may be distinctive, the nature of our work remains
                                    strictly professional. Bare & Clean Co. offers residential cleaning services only; no
                                    sexual services, physical contact, or transactional intimacy are offered, implied, or
                                    permitted under any circumstance.
                                </div>
                                <div className={"addPadTop"}>
                                    Operating on a referral-only model, we prioritize trust, professionalism, and long-term
                                    client relationships, delivering a modern cleaning service that is considered, reliable,
                                    and clearly defined.
                                </div>
                            </div>
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
