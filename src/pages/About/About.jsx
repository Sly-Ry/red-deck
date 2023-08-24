import './About.css';

import { BgImageComponent } from '../../components/BgImageComponent';
import { AboutLayout } from '../../layouts/AboutLayout/AboutLayout';
import cafe1 from '../../assets/images/cafe1.jpg';

export default function About() {
    return (
        <>
            <BgImageComponent img={cafe1}/>
            <AboutLayout />
        </>
    )
}