import $ from 'jquery';
import FlavorComponent from '../../components/Menu/FlavorComponent';
import { menuItems } from '../../data/menuItems';

export default function MenuLayout() {
    return (
        <>
            {
                menuItems.map(menuItem => {

                    $(function() {
                        $('div.section').addClass(menuItem.color);
                    });

                    return (
                        <>
                            <div id={menuItem.name} className="section row p-5">
                                <p className='section-title text-start text-uppercase'>{menuItem.name}</p>
                                <div className="row">
                                    {
                                        menuItem.flavors.map(flavor => {
                                            return (
                                                <>
                                                    <FlavorComponent
                                                        name={flavor.name}
                                                        items={flavor.items}
                                                    />
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </>
                    )
                })
            }
            
        </>
    )
}