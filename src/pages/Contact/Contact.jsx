import './Contact.css';

import { BgImageComponent } from '../../components/BgImageComponent';
import { ContactLayout } from '../../layouts/ContactLayout/ContactLayout';
import bg from '../../assets/images/bg/bg1.jpg';

export default function Contact() {
    return (
        <>
            <BgImageComponent img={bg}/>
            <ContactLayout />
        </>
    )
}