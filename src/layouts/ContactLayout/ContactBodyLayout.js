import { ExtensionLayout } from "./ExtensionLayout";
import { HiringLayout } from "./HiringLayout";
import { HoursLayout } from "./HoursLayout";
import { LocationLayout } from "./LocationLayout";

export function ContactBodyLayout() {
    return (
        <>
            <div id="contact" className="contact container-fluid d-flex align-items-center justify-content-center text-white" style={{minHeight: '100vh'}}>
                <div className="row d-flex align-items-start justify-content-center fw-bold w-100">
                    {/* HOURS */}
                    <div className="col-10 col-md-5 col-lg-3 text-uppercase p-5">
                        <HoursLayout />
                    </div>
                    {/* EXTENSIONS*/}
                    <div className="col-10 col-md-5 col-lg-3 text-uppercase p-5">
                        <ExtensionLayout />
                    </div>
                    {/* HIRING */}   
                    <div className="col-10 col-md-5 col-lg-3 text-uppercase p-5">
                        <HiringLayout />
                    </div>
                    {/* LOCATION */} 
                    <div className="col-10 col-md-5 col-lg-3 text-uppercase p-5">
                        <LocationLayout />
                    </div>
                </div>
            </div>
        </>
    )
}