import { NavLink } from "react-router-dom";
import { LogoLayout } from "./LogoLayout";

export function SideNavLayout() {
    return (
        <>
            
            <div className="col col-12">
                <LogoLayout on={true}/>
                <nav className="nav flex-column p-5">
                    <NavLink className="nav-link text-reset" to="/about">ABOUT</NavLink>
                    <NavLink className="nav-link text-reset" to="/menu">MENU</NavLink>
                    <NavLink className="nav-link text-reset" to="/catering">CATERING</NavLink>
                    <NavLink className="nav-link text-reset" to="/gift-cards">GIFT CARDS</NavLink>
                    <NavLink className="nav-link text-reset" to="/contact">CONTACT</NavLink>
                </nav>
            </div>
        </>
    )
}