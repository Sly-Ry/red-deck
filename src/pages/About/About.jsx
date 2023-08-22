// import { useEffect, useState } from 'react';

import './About.css';

import { BgImageComponent } from '../../components/BgImageComponent';
import { BannerComponent } from '../../components/BannerComponent';
import cafe1 from '../../assets/images/cafe1.jpg';

export default function About() {

    // const [color, setColor] = useState('');

    // const changeColor = () => {
    //     if(window.scrollY >= 400) {
    //         setColor('bg-color1')
    //     }
    //     else {
    //         setColor('');
    //     } 
    // };
    
    // window.addEventListener("scroll", changeColor);

    return (
        <>
            <BgImageComponent img={cafe1}/>
            <BannerComponent 
                color={'bg-color2'} 
                quote={''}
                motto={'About'} 
                submotto={'A little cafe with a passion for brewing dreams to life'}
            />
            
        </>
    )
}