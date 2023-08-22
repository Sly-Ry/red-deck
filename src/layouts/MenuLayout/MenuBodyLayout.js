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
                            <MenuNavLayout color={menuItem.color}/>
                            <SectionComponent 
                                key={menuItem.id}
                                color={menuItem.color}
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