import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className="container-fluidbg-dark">
                <div className="row">
                    <div className="col-3 flex-column bg-dark">
                        {/* LOGO */}
                        <div className="col-12 site-title">
                            <NavLink className="nav-link active" aria-current="page" to="/red-deck">
                                <h1>The Red Deck</h1>
                            </NavLink>
                        </div>
                        {/* NAVIGATION */}
                        <div className="col-12">
                            <nav className="nav flex-column">
                                <NavLink className="nav-link" to="/about">ABOUT</NavLink>
                                <NavLink className="nav-link" to="/menu">MENU</NavLink>
                                <NavLink className="nav-link" to="/catering">CATERING</NavLink>
                                <NavLink className="nav-link" to="/gift-cards">GIFT CARDS</NavLink>
                                <NavLink className="nav-link" to="/contact">CONTACT</NavLink>
                            </nav>
                        </div>
                        {/* FOOTER */}
                        <div className="col-12">
                            <form>

                            </form>
                        </div>
                    </div>
                    <div className="col-9 bg-dark">
                        <h1>hellow</h1>
                    </div>
                </div>
            </div>
        </>
    )
}