export function FooterLayout() {
    return (
        <>
            <div className="col col-2 bg-color2 fixed-bottom">
                {/* MAILING LIST */}
                <form className="mail p-4">
                    <div>
                        <label htmlFor="email" className="form-label">MAILING LIST</label>
                        <input type="email" className="form-control border-black rounded-0" id="email" placeholder="EMAIL"/>
                    </div>
                    <button type="submit" className="btn bg-color1 text-white mt-2 border-black rounded-0">SUBMIT</button>
                </form>
                {/* CONTACT INFO */}
                <div className="px-4">
                    <p>2104 E ANDERSON LN, SUITE 513</p>
                    <p>AUSTIN, TX 78758</p>
                    <p>PHONE: (###) ###-####</p>
                </div>
                {/* ICONS */}
                <div className="icons fs-4 mb-3 px-5 ">
                    <a href="https://www.facebook.com/">
                        <i className="bi bi-facebook text-white mx-3"></i>
                    </a>
                    <a href="https://twitter.com/?lang=en">
                        <i className="bi bi-twitter text-white mx-3"></i>
                    </a>
                    <a href="https://www.instagram.com/">
                        <i className="bi bi-instagram text-white mx-3"></i>
                    </a>
                </div>
                {/* RIGHTS */}
                <div className="px-4">
                    <p>Red Deck, Inc. ©  2009 - 2023</p>
                    <p>All Rights Reserved</p>
                </div>
            </div>
        </>
    )
}