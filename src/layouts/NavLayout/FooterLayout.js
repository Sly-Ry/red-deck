export function FooterLayout() {
    return (
        <>
            <div id="footer" className="container-fluid bg-color2 page ">
                <div className="row g-3">
                    {/* MAILING LIST */}
                    <div className="col-lg-6 col-xxl-12">
                        <form className="mail p-4">
                            <div>
                                <label htmlFor="email" className="form-label">MAILING LIST</label>
                                <input type="email" className="form-control border-black rounded-0" id="email" placeholder="EMAIL"/>
                            </div>
                            <button type="submit" className="btn bg-color1 text-white mt-2 border-black rounded-0">SUBMIT</button>
                        </form>
                    </div>
                    <div className="col-lg-6 col-xxl-12">
                        {/* CONTACT INFO */}
                        <div className="px-4">
                            <p>AUSTIN, TX 78758</p>
                            <p>PHONE: (###) ###-####</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xxl-12">
                        {/* ICONS */}
                        <div className="icons fs-4 mb-2 px-5 ">
                            <a href="https://www.facebook.com/">
                                <i className="bi bi-facebook text-white mx-2"></i>
                            </a>
                            <a href="https://twitter.com/?lang=en">
                                <i className="bi bi-twitter text-white mx-2"></i>
                            </a>
                            <a href="https://www.instagram.com/">
                                <i className="bi bi-instagram text-white mx-2"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xxl-12">
                        {/* RIGHTS */}
                        <div className="px-4">
                            <p>Red Deck, Inc. ©  2009 - 2023</p>
                            <p>All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}