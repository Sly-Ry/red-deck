import { BannerComponent } from "../../components/Banner/BannerComponent";
import cater2 from '../../assets/images/catering/cater2.jpg';
import cater1 from '../../assets/images/catering/cater1.jpg';
import { CarouselComponent } from "../../components/CarouselComponent";

export function CateringLayout() {
    return (
        <>
            <BannerComponent 
                color={'bg-color8'} 
                quote={''}
                motto={'catering'} 
                submotto={'no. let us'}
                link={'catering'}
                linktext={'the options'}
            />
            <div id="catering" className="container-fluid" style={{height: '100vh'}}>
                <div className="row catering-bg">  
                    <div className="col-6 d-flex justify-content-center align-items-center border-bottom p-5">
                        <div className="col-10 p-5">
                            <h1 className="text-uppercase text-center"><u>Your Place</u></h1>
                            <p className=" fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum accusantium itaque, porro suscipit veniam quod cumque repudiandae.</p>
                            <p className="call text-uppercase fs-4">
                                <span className="fw-bold">Ext.</span> (123) 456-7890
                            </p>
                            <p className="email text-uppercase fs-4">
                                <span className="fw-bold">Email.</span> red-deckcatering.com
                            </p>
                        </div>
                    </div>
                    <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                        <img src={cater1} alt="" className="p-4" style={{maxHeight: '100vh'}}/>
                    </div>
                </div>
            </div>
            <div id="catering-harper" className="row catering-bg"> 
                <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                    <img src={cater2} alt="" className="p-4" style={{maxHeight: '100vh'}}/>
                </div> 
                <div className="col-6 d-flex justify-content-center align-items-center p-5">
                    <div className="col-10 p-5">
                        <h1 className="text-uppercase text-center"><u>Harper House</u></h1>
                        <p className="fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum accusantium itaque, porro suscipit veniam quod cumque repudiandae.</p>
                        <p className="call text-uppercase fs-4">
                            <span className="fw-bold">Ext.</span> (123) 456-7890
                        </p>
                        <p className="site text-uppercase fs-4">
                            <span className="fw-bold">Site.</span> <a href="https://sly-ry.github.io/harper-house/about/contact" className="text-white">harperhouse.com</a>
                        </p>
                    </div>
                </div>
            </div>
            <CarouselComponent />
        </>
    )
}