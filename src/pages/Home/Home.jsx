import './Home.css';

import { BgImageComponent } from '../../components/BgImageComponent';
import bg from '../../assets/images/bg/bg1.jpg';

export default function Home() {
    return (
        <>  
            <BgImageComponent img={bg} fixed={'fixed-top'}/>
            <div className="home container-fluid d-flex justify-content-center align-items-center page">
                <div className="row d-flex justify-content-center text-center text-white home-color1">
                    <div className="title col-lg-10 col-xxl-12 p-4">
                        <p className='welcome fs-1'><span className="border-bottom">Bienvenidos a The Red Deck <span className='ghost'>Café y Barra</span></span></p>
                        <p className='en fs-2'>Welcome to The Red Deck Café y Barra </p>
                        <p className='ghost2 d-flex justify-content-center align-items-center fs-2'>Café y Barra </p>
                    </div>
                    <div className="col-md-10 col-lg-7 text-start px-5">
                        <p className='fs-4 fw-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, id rerum, distinctio tempora voluptas totam temporibus eius aliquid, incidunt vitae reprehenderit impedit possimus odit doloremque. Temporibus odit assumenda rerum ipsum.</p>
                    </div>
                    <div className="info col-10 col-md-12 text-uppercase">
                        <p className='title fs-2'>ALL DAY CAFÉ</p>
                        <p className='fw-bold'>Dining room & bar open 7 days a week</p>
                        <p className='title fs-2'>COMING SOON</p>
                        <p className='fw-bold'>Takeaway available daily. order online for pick-up or deliver through favor.</p>
                    </div>
                </div>
            </div>
        </>
    )
}