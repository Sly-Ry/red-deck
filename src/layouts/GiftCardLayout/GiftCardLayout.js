import { BannerComponent } from "../../components/Banner/BannerComponent";
import { CardComponent} from "../../components/GiftCard/CardComponent";
import { CarouselComponent } from '../../components/CarouselComponent';

export function GiftCardLayout() {
    return (
        <>
            <BannerComponent 
                color={'bg-color7'} 
                quote={""}
                qColor={''}
                motto={'gift cards'} 
                submotto={'did someone say, "the perfect gift"'}
                link={'gift'}
                linktext={'take a gander'}
            />
            {/* GIFT CARD SECTION */}
            <div id="gift" className="container-fluid bg-white">
                <div className="row d-flex align-items-center justify-content-center px-5">
                    <CardComponent
                        price='25'
                        tickets=''
                    />
                    <CardComponent
                        price='30-45'
                        tickets='+1 admission ticket - harper house'
                        en='en'
                    />
                    <CardComponent
                        price='50'
                        tickets='+1 admission ticket - harper house'
                        en='en'
                    />
                    <CardComponent
                        price='75-100'
                        tickets='+2 admission tickets - harper house'
                        en='en'
                    />
                    <div>
                        <h6 className="info text-center fs-4 en">You can find these at all available retail stores. That's right, <u className="text-color1">ALL</u> of them.</h6>
                        <h6 className="info text-center fs-4 hidden">Available in retail stores, worldwide. That's right, <u className="text-color1">everywhere</u>.</h6>
                    </div>
                </div>
            </div>
            <CarouselComponent />
        </>
    )
}