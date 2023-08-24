import './About.css';

import { BgImageComponent } from '../../components/BgImageComponent';
import { AboutLayout } from '../../layouts/AboutLayout/AboutLayout';
import bg from '../../assets/images/bg/bg1.jpg';

export default function About() {
    return (
        <>
            <BgImageComponent img={bg}/>
            <AboutLayout />
        </>
    )
}