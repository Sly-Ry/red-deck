import { BannerComponent } from "../../components/Banner/BannerComponent";
import { ContactBodyLayout } from "./ContactBodyLayout";

export function ContactLayout() {
    return (
        <>
            <BannerComponent 
                color={'bg-color2'} 
                quote={''}
                motto={'contact'} 
                submotto={'See you soon'}
                link={'contact'}
                linktext={'contact us'}
            />
            <ContactBodyLayout />
        </>
    )
}