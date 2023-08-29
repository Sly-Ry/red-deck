// import { useEffect, useState } from 'react';
import { SectionComponent } from '../../components/Menu/SectionComponent';
import { menuItems } from '../../data/menuItems';
import { MenuNavLayout } from './MenuNavLayout';

export function MenuBodyLayout() {
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