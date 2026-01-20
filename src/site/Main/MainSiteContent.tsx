"use client";
import {Outlet} from "react-router-dom";

export const MainSiteContent = () => {
    return (
        <div id={"main"}>
            <Outlet />
        </div>
    )
};