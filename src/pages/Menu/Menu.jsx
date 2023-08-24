import './Menu.css';

import { BgImageComponent } from '../../components/BgImageComponent';
import { MenuLayout } from '../../layouts/MenuLayout/MenuLayout';
import cafe8 from '../../assets/images/cafe8.jpg';

export default function Menu() {
    return (
        <>
            <BgImageComponent img={cafe8}/>
            <MenuLayout />
        </>
    )
}