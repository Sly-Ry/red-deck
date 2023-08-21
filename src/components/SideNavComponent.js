import { NavLink } from "react-router-dom";

export function SideNavComponent() {
    return (
        <>
            <div className="col col-12 ">
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