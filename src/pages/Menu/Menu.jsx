import './Menu.css';

import { BannerComponent } from "../../components/BannerComponent";
import { BgImageComponent } from "../../components/BgImageComponent";
import cafe1 from '../../assets/images/cafe1.jpg';
import MenuLayout from '../../layouts/MenuLayout/MenuLayout';

export default function Menu() {
    return (
        <>
            <BgImageComponent img={cafe1}/>
            <BannerComponent 
                color={'bg-color3'} 
                quote={''}
                motto={'Menu'} 
                submotto={"See what's in store"}
            />
            <div className="menu d-flex align-items-center sticky-top">
                <nav className="nav col-12 bg-color3 d-flex justify-content-evenly">
                    <a className="nav-link fs-5 px-5" href="#cafe">CAFE</a>
                    <a className="nav-link fs-5 px-5" href="#beber">BEBER</a>
                    <a className="nav-link fs-5 px-5"  href="#vino">VINO</a>
                    <a className="nav-link fs-5 px-5"  href="#la hora">LA HORA</a>
                </nav>
            </div>
            <div className="menu container-fluid d-flex flex-column justify-content-center text-center text-white bg-white">
                <MenuLayout />
                {/* <div id='cafe' className="section row bg-primary p-5">
                    <p className='section-title text-start text-uppercase'>cafe</p>
                    <div className="row">
                        <div className="col-3 px-5 ">
                            <p className='col-title text-start fs-5'>HOT</p>
                            <div className="row mb-3">
                                <div className='title col-10 d-flex justify-content-between'>
                                    <p className="name fs-4">Coffee</p>
                                    <p className="price fs-5">$<span className='fs-3'>5</span></p>
                                </div>
                                <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className="row mb-3">
                                <div className='title col-10 d-flex justify-content-between'>
                                    <p className="name fs-4">Coffee</p>
                                    <p className="price fs-5">$<span className='fs-3'>5</span></p>
                                </div>
                                <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className="row mb-3">
                                <div className='title col-10 d-flex justify-content-between'>
                                    <p className="name fs-4">Coffee</p>
                                    <p className="price fs-5">$<span className='fs-3'>5</span></p>
                                </div>
                                <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className="row mb-3">
                                <div className='title col-10 d-flex justify-content-between'>
                                    <p className="name fs-4">Coffee</p>
                                    <p className="price fs-5">$<span className='fs-3'>5</span></p>
                                </div>
                                <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        
                    </div>
                </div> */}
            </div>
        </>
    )
}