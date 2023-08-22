import './Menu.css';

import { BgImageComponent } from '../../components/BgImageComponent';
import { MenuLayout } from '../../layouts/MenuLayout/MenuLayout';
import cafe1 from '../../assets/images/cafe1.jpg';

export default function Menu() {
    return (
        <>
            <BgImageComponent img={cafe1}/>
            <MenuLayout />
        </>
    )
}