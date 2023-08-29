import { menuItems } from "../../data/menuItems"

export function MenuNavLayout({color, disable}) {
    return (
        <>  
            <div id="menuNav" className={`menu d-flex align-items-end sticky-top ${color}`}>
                <nav className="nav col-12 d-flex flex-row justify-content-evenly">
                {
                    menuItems.map(menuItem => {
                        if (menuItem.name === disable){
                            return (
                                <>
                                    <a className="nav-link fs-5 px-4 text-uppercase disabled active" href={`#${menuItem.name}`}>{menuItem.name}</a>
                                </>
                            );
                        }
                        else {
                            return (
                                <>
                                    <a className="nav-link fs-5 px-4 text-uppercase" href={`#${menuItem.name}`}>{menuItem.name}</a>
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