import { menuItems } from "../../data/menuItems"

export function MenuNavLayout({color, disable, stick}) {
    return (
        <>  
            <div className={`menu d-flex align-items-center sticky-top ${color} ${stick}`}>
                <nav className="nav col-12 d-flex justify-content-evenly">
                {
                    menuItems.map(menuItem => {
                        if (menuItem.name === disable){
                            return (
                                <>
                                    <a className="nav-link fs-5 px-5 text-uppercase disabled active" href={`#${menuItem.name}`}>{menuItem.name}</a>
                                </>
                            );
                        }
                        else {
                            return (
                                <>
                                    <a className="nav-link fs-5 px-5 text-uppercase" href={`#${menuItem.name}`}>{menuItem.name}</a>
                                </>
                            );
                        }
                    })
                }
                </nav>
            </div>
        </>
    )
}