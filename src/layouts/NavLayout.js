import { LogoComponent } from "../components/LogoComponent";
import { SideNavComponent } from "../components/SideNavComponent";
import { FooterLayout } from "./FooterLayout";

import './NavLayout.css';

export function NavLayout() {
    return (
        <>
            <div className="col col-2 bg-color2 d-flex flex-column align-items-start fixed-top" style={{minHeight: '100vh'}}>
                {/* LOGO */}
                <LogoComponent />
                {/* NAVIGATION */}
                <SideNavComponent />
                {/* FOOTER */}
                <FooterLayout />
            </div>
        </>
    )
}