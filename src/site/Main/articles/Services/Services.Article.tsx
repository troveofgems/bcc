"use client";
import {useNavigate} from "react-router-dom";
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

import Image2 from "../../../../images/pic02.jpg";

export const ServicesArticle = () => {
    const navigate = useNavigate();
    return (
        <Dialog modal={true} open={true} onOpenChange={() => navigate("/")}>
            <DialogContent className={"dialogStyles dialogModal"}>
                <DialogHeader>
                    <DialogTitle className={"major"}>
                        Services
                    </DialogTitle>
                    <DialogDescription className={"services_description"}>
                        Bare & Clean Co. provides professional residential cleaning through structured, time-based
                        offerings designed for private clients who value discretion, consistency, and elevated
                        standards.
                        <ScrollArea className="h-92 rounded-md border">
                            <span className="image main"><img src={Image2} alt=""/></span>
                            <h4>Regular Services</h4>
                            <ul className={"ulOverride"}>
                                <li>
                                    Foundation - 1 Hour
                                    <div>
                                        <i>A focused service designed for routine upkeep and priority areas,</i> Includes:
                                    </div>
                                    <ul>
                                        <li>
                                            Dusting accessible surfaces
                                        </li>
                                        <li>
                                            Wiping light switches and door handles
                                        </li>
                                        <li>
                                            Vacuuming carpets and rugs
                                        </li>
                                        <li>
                                            Sweeping and mopping hard floors
                                        </li>
                                        <li>
                                            Trash removal
                                        </li>
                                        <li>
                                            <h4>Kitchen (Light):</h4>
                                            <ul className={"collapseMargins"}>
                                                <li>Countertop wipe-down</li>
                                                <li>Sink and faucet cleaning</li>
                                                <li>Stovetop surface wipe</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h4>Bathroom (Light):</h4>
                                            <ul>
                                                <li>Sink and faucet cleaning</li>
                                                <li>Toilet exterior wipe</li>
                                                <li>Mirror cleaning</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className={"ulOverride"}>
                                <li>
                                    Elevated - 2 Hours
                                    <div>
                                        <i>
                                            An expanded service providing comprehensive coverage with enhanced attention
                                            throughout the home. Includes all Foundation services,
                                        </i> Plus:
                                    </div>
                                    <ul>
                                        <li>
                                            <h4>Kitchen:</h4>
                                            <ul className={"collapseMargins"}>
                                                <li>Full countertop cleaning and sanitizing</li>
                                                <li>Exterior appliance wipe-down</li>
                                                <li>Spot cleaning cabinet fronts</li>
                                                <li>Floor care</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h4>Bathrooms:</h4>
                                            <ul className={"collapseMargins"}>
                                                <li>Cleaning and sanitizing toilets</li>
                                                <li>Shower and tub cleaning</li>
                                                <li>Vanity and counter cleaning</li>
                                                <li>Floor care</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h4>Living & Bedrooms:</h4>
                                            <ul>
                                                <li>Dusting furniture and surfaces</li>
                                                <li>Vacuuming or floor care</li>
                                                <li>Bed straightening (no linen changes)</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <h4>Additional Services</h4>
                            <div>
                                <i>Select services may be requested based on time availability and property needs,</i> Including:
                            </div>
                            <ul>
                                <li>Oven cleaning</li>
                                <li>Deep bathroom cleaning</li>
                                <li>Detailed floor cleaning</li>
                            </ul>
                            <div>
                                Scope and feasibility are confirmed prior to, or, during the appointment.
                            </div>
                            <h4 className={"paddingTopL"}>Service Notes</h4>
                            Services are limited to accessible areas.
                            Heavy lifting, hazardous materials, and biohazards are excluded.
                            Final service scope is determined by time, layout, and condition of the residence.

                            <div className={"addPadTop"}>
                                * <i>You Supply Your Own Cleaning Supplies</i>
                            </div>
                        </ScrollArea>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}