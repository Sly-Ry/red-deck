import { BannerComponent } from "../../components/Banner/BannerComponent";
import { CardLayout } from "../../components/GiftCard/CardComponent";
import { CarouselComponent } from '../../components/CarouselComponent';

export function GiftCardLayout() {
    return (
        <>
            <BannerComponent 
                color={'bg-color4'} 
                quote={""}
                qColor={''}
                motto={'gift cards'} 
                submotto={'did someone say, "the perfect gift"'}
                link={'gift'}
                linktext={'take a gander'}
            />
            {/* GIFT CARD SECTION */}
            <div id="gift" className="container-fluid bg-white">
                <div className="row d-flex align-items-center justify-content-center p-5">
                    <CardLayout 
                        price='25'
                        tickets=''
                    />
                    <CardLayout 
                        price='30-45'
                        tickets='+1 admission ticket - harper house'
                    />
                    <CardLayout 
                        price='50'
                        tickets='+1 admission ticket - harper house'
                    />
                    <CardLayout 
                        price='75-100'
                        tickets='+2 admission tickets - harper house'
                    />
                    <div>
                        <h6 className="info text-center fs-4">You can find these at all available retail stores. That's right, <u className="text-color1">ALL</u> of them.</h6>
                    </div>
                </div>
            </div>
            <CarouselComponent />
        </>
    )
}