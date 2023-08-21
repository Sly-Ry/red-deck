import './Home.css';

import cafe1 from '../../assets/images/cafe1.jpg'

export default function Home() {
    return (
        <>  
            
            <img src={cafe1} alt="a view of the cafe from the bushes" className='img fixed-top'/>
            <div className='row'>
                <div className="col-12">
                    <h1>HEllow world</h1>
                </div>
            </div>
            
        </>
    )
}