import './Home.css';

import cafe1 from '../../assets/images/cafe1.jpg'
import { BgImageComponent } from '../../components/BgImageComponent';
import { BannerComponent } from '../../components/BannerComponent';

export default function Home() {
    return (
        <>  
            <BgImageComponent img={cafe1}/>
            <div >
                <BannerComponent 
                    color={'bg-color2'}
                    quote={'“Quiero café!”'}
                    motto={'AN ALL DAY CAFÉ'}
                    submotto={'SUN - MON'}
                />
                <div className="container-fluid bg-white text-dark">
                    <h1>hellow two!</h1>
                </div>
            </div>
        </>
    )
}