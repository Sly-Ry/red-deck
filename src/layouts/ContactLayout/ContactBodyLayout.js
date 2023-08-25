import { ContactInfoLayout } from "./ContactInfoLayout";
import { HiringLayout } from "./HiringLayout";
import { HoursLayout } from "./HoursLayout";
import { LocationLayout } from "./LocationLayout";

export function ContactBodyLayout() {
    return (
        <>
            <div id="contact" className="contact container-fluid d-flex align-items-center justify-content-center text-white" style={{minHeight: '100vh'}}>
                <div className="row d-flex align-items-start fw-bold w-100">
                    {/* HOURS */}
                    <HoursLayout />
                    {/* CONTACT INFO*/}
                    <ContactInfoLayout />
                    {/* HIRING */}
                    <HiringLayout />
                    {/* LOCATION */}
                    <LocationLayout />
                </div>
            </div>
        </>
    )
}