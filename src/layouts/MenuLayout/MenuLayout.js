import './MenuLayout.css'

import { BannerComponent } from '../../components/Banner/BannerComponent';
import { MenuBodyLayout } from './MenuBodyLayout';
import { CarouselComponent } from '../../components/CarouselComponent';


export function MenuLayout() {
    return (
        <>
            <BannerComponent 
                color={'bg-color7'} 
                quote={''}
                motto={'menu'} 
                submotto={"See what's in store"}
                link={'cafe'}
                linktext={'Start here'}
            />
            <MenuBodyLayout />
            <CarouselComponent />
        </>
    )
}