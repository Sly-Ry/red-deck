// import { useEffect, useState } from 'react';
import { SectionComponent } from '../../components/Menu/SectionComponent';
import { menuItems } from '../../data/menuItems';
import { MenuNavLayout } from './MenuNavLayout';

export function MenuBodyLayout() {

    // const [stickyClass, setStickyClass] = useState('');

    // useEffect(() => {
    //     window.addEventListener('scroll', stickNavbar);

    //     return () => {
    //         window.removeEventListener('scroll', stickNavbar);
    //     };
    // }, []);

    // const stickNavbar = () => {
    //     if (window !== undefined) {
    //         let windowHeight = window.scrollY; 
    //         windowHeight > 500 && windowHeight < 1200 ? setStickyClass('sticky-top'): 
    //         windowHeight > 1300 && windowHeight < 2000 ? setStickyClass('sticky-top') : 
    //         windowHeight > 2100 && windowHeight < 2800 ? setStickyClass('sticky-top') : 
    //         windowHeight > 2900 && windowHeight < 3600 ? setStickyClass('sticky-top') : 
    //         setStickyClass('');
    //     }
    // };

    return (
        <>  
            <div className="menu container-fluid d-flex flex-column justify-content-center text-center text-white">
            {
                menuItems.map(menuItem => {
                    return (
                        <>
                            <MenuNavLayout 
                                color={menuItem.color} 
                                disable={menuItem.name}
                                //stick={stickyClass}//
                            />
                            <SectionComponent 
                                key={menuItem.id}
                                screen={menuItem.screen}
                                name={menuItem.name}
                                flavors={menuItem.flavors}
                            />
                        </>
                    )
                })
            }
            </div>
        </>
    )
}