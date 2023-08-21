import { LogoLayout } from "./LogoLayout";
import { SideNavLayout } from "./SideNavLayout";
import { FooterLayout } from "./FooterLayout";

import './NavLayout.css';

export function NavLayout() {
    return (
        <>
            <div className="col col-2 bg-color2 d-flex flex-column align-items-start fixed-top" style={{minHeight: '100vh'}}>
                {/* LOGO */}
                <LogoLayout />
                {/* NAVIGATION */}
                <SideNavLayout />
                {/* FOOTER */}
                <FooterLayout />
            </div>
        </>
    )
}