import { NavLink } from "react-router-dom";

export function LogoLayout({on}) {
    if(on) {
        return (
            <>
                <div className="logo col col-12 text-center text-uppercase py-5">
                    <NavLink className="nav-link text-reset active" aria-current="page" to="/">
                        <p className="the">The</p>
                        <p className="name">
                            <span className="border-bottom"><span className="text-color1 glow">Red</span> Deck</span>
                        </p>
                        <p className="tag  fs-6" >café y barra</p>
                    </NavLink>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="logo col col-12 text-center text-uppercase py-5">
                    <p className="the fs-5">The</p>
                    <p className="name">
                        <span className="border-bottom">Red Deck</span>
                    </p>
                    <p className="tag fs-6" >café y barra</p>
                </div>
            </>
        )
    }
}