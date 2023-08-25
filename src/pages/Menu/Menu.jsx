import './Menu.css';

import { BgImageComponent } from '../../components/BgImageComponent';
import { MenuLayout } from '../../layouts/MenuLayout/MenuLayout';
import bg from '../../assets/images/bg/bg2.jpg';

export default function Menu() {
    return (
        <>
            <BgImageComponent img={bg} fixed={'fixed-top'}/>
            <MenuLayout />
        </>
    )
}