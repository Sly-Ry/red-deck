import { BannerComponent } from "../../components/Banner/BannerComponent";
import cater2 from '../../assets/images/catering/cater2.jpg';
import cater1 from '../../assets/images/catering/cater1.jpg';

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
            <div id="catering" className="container-fluid">
                <div className="row catering-bg d-flex justify-content-center align-items-center" >  
                    <div className="col-lg-6 d-flex justify-content-center align-items-center border-bottom p-5 page-sm" >
                        <div className="col-12 col-md-10  p-3">
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
                    <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
                            <img src={cater1} alt="" className="vap w-auto p-4" style={{maxHeight: 700}}/>
                    </div>
                </div>
                <div id="catering-harper" className="row catering-bg d-flex justify-content-center align-items-center"> 
                    <div className="col-lg-6">
                        <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                            <img src={cater2} alt="" className="vap w-auto p-4" style={{maxHeight: 700}}/>
                        </div>
                    </div> 
                    <div className="col-lg-6 d-flex justify-content-center align-items-center border-bottom p-5 page-sm">
                        <div className="col-12 col-md-10 p-3">
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
            </div>
        </>
    )
}