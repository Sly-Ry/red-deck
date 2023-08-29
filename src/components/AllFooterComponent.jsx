export function AllFooterLayout({hidden}) {
    return (
        <>
            <div id="allfooter" className={`container-fluid bg-color2 ${hidden}`}>
                <div className="row d-flex justify-content-center align-items-center text-center g-3 my-4 px-2">
                    {/* MAILING LIST */}
                    <div className="col-md-3">
                        <form className="mail text-start p-4">
                            <div>
                                <label htmlFor="email" className="form-label">MAILING LIST</label>
                                <input type="email" className="form-control border-black rounded-0" id="email" placeholder="EMAIL"/>
                            </div>
                            <button type="submit" className="btn bg-color1 text-white mt-2 border-black rounded-0">SUBMIT</button>
                        </form>
                    </div>
                    <div className="col-md-3">
                        {/* CONTACT INFO */}
                        <div className="px-4">
                            <p>AUSTIN, TX 78758</p>
                            <p>PHONE: (###) ###-####</p>
                        </div>
                    </div>
                    <div className="col-md-3">
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
                    <div className="col-md-3">
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