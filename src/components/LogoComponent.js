import { NavLink } from "react-router-dom";

export function LogoComponent() {
    return (
        <>
            <div className="logo col col-12 text-center py-5">
                <NavLink className="nav-link text-reset active" aria-current="page" to="/">
                    <p className="the text-uppercase">The</p>
                    <p className="name text-uppercase">
                        <span className="border-bottom"><span className="text-color1 glow">Red</span> Deck</span>
                    </p>
                    <p className="tag text-uppercase fs-6" >café y barra</p>
                </NavLink>
            </div>
        </>
    )
}