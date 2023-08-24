import { BannerComponent } from '../../components/Banner/BannerComponent';
import { MenuBodyLayout } from './MenuBodyLayout';
import { CarouselComponent } from '../../components/CarouselComponent';


export function MenuLayout() {
    return (
        <>
            <BannerComponent 
                color={'bg-color8'} 
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