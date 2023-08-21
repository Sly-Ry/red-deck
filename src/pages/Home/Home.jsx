import './Home.css';

import cafe1 from '../../assets/images/cafe1.jpg'

export default function Home() {
    return (
        <>
            <div style={{maxHeight: '90vh'}}>
                <img src={cafe1} class="img-fluid" alt="Cafe in lucious setting by Ruben Ramirez" ></img>
            </div>
        </>
    )
}