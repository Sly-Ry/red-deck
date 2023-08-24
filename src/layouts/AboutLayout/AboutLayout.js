import { BannerComponent } from "../../components/Banner/BannerComponent";
import { AboutBodyLayout } from "./AboutBodyLayout";
import { CarouselComponent } from "../../components/CarouselComponent";

export function AboutLayout() {
    return (
        <>
            <BannerComponent 
                color={'bg-color3'} 
                quote={''}
                motto={'about'} 
                submotto={'A little cafe with a passion for brewing dreams to life'}
                link={'about'}
                linktext={'meet the team'}
            />
            <AboutBodyLayout />
            <CarouselComponent />
        </>
    )
}