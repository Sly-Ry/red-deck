import { SideNavLayout } from "./SideNavLayout";
import { FooterLayout } from "./FooterLayout";

import './NavLayout.css';

export function NavLayout() {
    return (
        <>
            <div id="navlay" className="col col-xxl-2 d-flex flex-column align-items-start fixed-top">
                {/* NAVIGATION */}
                <SideNavLayout />
                {/* FOOTER */}
                <FooterLayout />
            </div>
        </>
    )
}