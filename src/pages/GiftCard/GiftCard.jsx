import './GiftCard.css'

import { BgImageComponent } from '../../components/BgImageComponent';
import { GiftCardLayout } from '../../layouts/GiftCardLayout/GiftCardLayout';
import bg from '../../assets/images/bg/bg4.jpg';

export default function GiftCard() {
    return (
        <>
            <BgImageComponent img={bg} fixed={'fixed-top'}/>
            <GiftCardLayout />
        </>
    )
}