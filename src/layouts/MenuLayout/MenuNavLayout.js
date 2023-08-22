import { useEffect, useState } from "react";

export function MenuNavLayout({color}) {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') { 
            if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
                setShow(false); 
            } else { // if scroll up show the navbar
                setShow(true);  
            }

            // remember current page location to use in the next move
            setLastScrollY(window.scrollY); 
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <>  
            <div className={`menu d-flex align-items-center sticky-top ${color}`}>
                <nav className="nav col-12 d-flex justify-content-evenly">
                    <a className="nav-link fs-5 px-5" href="#cafe">CAFE</a>
                    <a className="nav-link fs-5 px-5" href="#beber">BEBER</a>
                    <a className="nav-link fs-5 px-5" href="#vino">VINO</a>
                    <a className="nav-link fs-5 px-5" href="#la hora">LA HORA</a>
                </nav>
            </div>
        </>
    )
}