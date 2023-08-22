import { BannerComponent } from '../../components/BannerComponent';
import { MenuBodyLayout } from './MenuBodyLayout';
import { CarouselComponent } from '../../components/Menu/CarouselComponent';


export function MenuLayout() {
    return (
        <>
            <BannerComponent 
                color={'bg-color2'} 
                quote={''}
                motto={'Menu'} 
                submotto={"See what's in store"}
            />
            <MenuBodyLayout />
            <CarouselComponent />
        </>
    )
}