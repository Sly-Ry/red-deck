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
                link={''}
                linktext={''}
            />
            <div className="container-fluid" style={{height: '100vh'}}>
                <div className="row">  
                    <div className="side col-6 border-bottom">
                        
                    </div>
                    <div className="side col-6 d-flex flex-column justify-content-center align-items-center">
                        <img src={cater1} alt="" className="p-4" style={{maxHeight: '100vh'}}/>
                    </div>
                </div>
            </div>
            <div className="container-fluid" style={{height: '100vh'}}>
                <div className="row"> 
                    <div className="side col-6 d-flex flex-column justify-content-center align-items-center">
                        <img src={cater2} alt="" className="p-4" style={{maxHeight: '100vh'}}/>
                    </div> 
                    <div className="side col-6 border-bottom">
                    </div>
                </div>
            </div>
        </>
    )
}