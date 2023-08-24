import './Catering.css';

import { BgImageComponent } from '../../components/BgImageComponent';
import { CateringLayout } from '../../layouts/CateringLayout/CateringLayout';
import bg from '../../assets/images/bg/bg1.jpg';

export default function Catering() {
    return (
        <>
            <BgImageComponent img={bg}/>
            <CateringLayout />
        </>
    )
}