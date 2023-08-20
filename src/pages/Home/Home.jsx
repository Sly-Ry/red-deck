import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className="container-fluid bg-dark text-white" style={{fontFamily: 'Montserrat'}}>
                <div className="row">
                    <div className="col col-2 d-flex flex-column align-items-start" style={{minHeight: '100vh'}}>
                        {/* LOGO */}
                        <div className="col col-12 p-5 mb-5 site-title text-center">
                            <NavLink className="nav-link text-reset active" aria-current="page" to="/red-deck">
                                <h3 className="text-uppercase">The</h3>
                                <h1 className="text-uppercase fs-1">
                                    <span style={{color: 'crimson'}}>Red</span> Deck
                                </h1>
                            </NavLink>
                        </div>
                        {/* NAVIGATION */}
                        <div className="col col-12 ">
                            <nav className="nav flex-column p-5">
                                <NavLink className="nav-link text-reset" to="/about">ABOUT</NavLink>
                                <NavLink className="nav-link text-reset" to="/menu">MENU</NavLink>
                                <NavLink className="nav-link text-reset" to="/catering">CATERING</NavLink>
                                <NavLink className="nav-link text-reset" to="/gift-cards">GIFT CARDS</NavLink>
                                <NavLink className="nav-link text-reset" to="/contact">CONTACT</NavLink>
                            </nav>
                        </div>
                        {/* FOOTER */}
                        <div className="col col-2 fixed-bottom bg-dark">
                            <form className="p-4">
                                <div>
                                    <label htmlFor="email" className="form-label">MAILING LIST</label>
                                    <input type="email" className="form-control border-black rounded-0" id="email" placeholder="EMAIL"/>
                                </div>
                                <button type="submit" className="btn btn-danger mt-2 border-black rounded-0">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="col col-10 bg-primary">
                        <h1>hellow</h1>
                    </div>
                </div>
            </div>
        </>
    )
}