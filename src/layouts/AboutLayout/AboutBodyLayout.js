import person1 from '../../assets/images/profile/person1.jpg';
import person2 from '../../assets/images/profile/person2.jpg';
import person3 from '../../assets/images/profile/person3.jpg'
import { PersonComponent } from '../../components/About/PersonComponent';
import { PersonComponentFlip } from '../../components/About/PersonComponentFlip';

export function AboutBodyLayout() {
    return (
        <>
            <div id='about' className="about container-fluid bg-color3">
                <PersonComponent
                    photo={person1}
                    alt={"Owner of The Red Deck"}
                    name={"PERSON NAME"}
                    based={"OWNER. BROWNSVILLE, TX"}
                    desc1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dicta suscipit sit nisi consectetur exercitationem tempora quis optio quia amet reiciendis, animi, ad temporibus est, laboriosam itaque libero quos earum."}
                    desc2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dicta suscipit sit nisi consectetur exercitationem tempora quis optio quia amet reiciendis, animi, ad temporibus est, laboriosam itaque libero quos earum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dicta suscipit sit nisi consectetur exercitationem tempora quis optio quia amet reiciendis, animi, ad temporibus est, laboriosam itaque libero quos earum."}
                    desc3={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dicta suscipit sit nisi consectetur exercitationem tempora quis optio quia amet reiciendis, animi, ad temporibus est, laboriosam itaque libero quos earum!"}
                />
                <PersonComponentFlip
                    photo={person2}
                    alt={"Co-Owner of The Red Deck"}
                    name={"PERSON NAME"}
                    based={"MASTER MIXOLOGIST. MANHATTAN, NEW YORK"}
                    desc1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dicta suscipit sit nisi consectetur exercitationem tempora quis optio quia amet reiciendis, animi, ad temporibus est, laboriosam itaque libero quos earum."}
                    desc2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dicta suscipit sit nisi consectetur exercitationem tempora quis optio quia amet reiciendis, animi, ad temporibus est, laboriosam itaque libero quos earum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dicta suscipit sit nisi consectetur exercitationem tempora quis optio quia amet reiciendis, animi, ad temporibus est, laboriosam itaque libero quos earum."}
                    desc3={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dicta suscipit sit nisi consectetur exercitationem tempora quis optio quia amet reiciendis, animi, ad temporibus est, laboriosam itaque libero quos earum!"}
                />
                <PersonComponent
                    photo={person3}
                    alt={"Manager of The Red Deck"}
                    name={"PERSON NAME"}
                    based={"GENERAL MANGER. AUSTIN, TX"}
                    desc1={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dicta suscipit sit nisi consectetur exercitationem tempora quis optio quia amet reiciendis, animi, ad temporibus est, laboriosam itaque libero quos earum."}
                    desc2={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dicta suscipit sit nisi consectetur exercitationem tempora quis optio quia amet reiciendis, animi, ad temporibus est, laboriosam itaque libero quos earum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dicta suscipit sit nisi consectetur exercitationem tempora quis optio quia amet reiciendis, animi, ad temporibus est, laboriosam itaque libero quos earum."}
                    desc3={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dicta suscipit sit nisi consectetur exercitationem tempora quis optio quia amet reiciendis, animi, ad temporibus est, laboriosam itaque libero quos earum!"}
                />
            </div>
            
        </>
    )
}