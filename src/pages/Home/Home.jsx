import './Home.css';

import { BgImageComponent } from '../../components/BgImageComponent';
import bg from '../../assets/images/bg/bg1.jpg';

export default function Home() {
    return (
        <>  
            <BgImageComponent img={bg} fixed={'fixed-top'}/>
            <div className="home container-fluid d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
                <div className="row d-flex justify-content-center text-center text-white p-5 bg-color1">
                    <div className="title col-12">
                        <p className='welcome fs-1'><span className="border-bottom">Bienvenidos a The Red Deck Café y Barra</span></p>
                        <p className='fs-2'>Welcome  to The Red Deck Café y Barra </p>
                    </div>
                    <div className="col-6 text-start mb-5">
                        <p className='fs-4 fw-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, id rerum, distinctio tempora voluptas totam temporibus eius aliquid, incidunt vitae reprehenderit impedit possimus odit doloremque. Temporibus odit assumenda rerum ipsum.</p>
                    </div>
                    <div className="info col-12 text-uppercase">
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