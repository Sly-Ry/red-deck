import person1 from '../../assets/images/profile/person1.jpg';
import person2 from '../../assets/images/profile/person2.jpg';
import person3 from '../../assets/images/profile/person3.jpg'

export function AboutBodyLayout() {
    return (
        <>
            <div id='about' className="about container-fluid bg-color3">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="photo col-5 p-5">
                        <div className="card m-5">
                            <img src={person1} alt="Owner of The Red Deck"/>  
                        </div>  
                    </div>
                    <div className="info col-5 text-white border-bottom m-5 p-5">
                        <h1>PERSON NAME</h1>
                        <p>OWNER. BROWNSVILLE, TX</p>
                        <p className='fs-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dicta suscipit sit nisi consectetur exercitationem tempora quis optio quia amet reiciendis, animi, ad temporibus est, laboriosam itaque libero quos earum.
                        </p>
                        <p className='fs-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dicta suscipit sit nisi consectetur exercitationem tempora quis optio quia amet reiciendis, animi, ad temporibus est, laboriosam itaque libero quos earum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dicta suscipit sit nisi consectetur exercitationem tempora quis optio quia amet reiciendis, animi, ad temporibus est, laboriosam itaque libero quos earum.
                        </p>
                        <p className='fs-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dicta suscipit sit nisi consectetur exercitationem tempora quis optio quia amet reiciendis, animi, ad temporibus est, laboriosam itaque libero quos earum!
                        </p>
                    </div>
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="info col-5 text-white border-bottom m-5 p-5">
                        <h1>PERSON NAME</h1>
                        <p>MASTER MIXOLOGIST. MANHATTAN, NEW YORK</p>
                        <p className='fs-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dicta suscipit sit nisi consectetur exercitationem tempora quis optio quia amet reiciendis, animi, ad temporibus est, laboriosam itaque libero quos earum.
                        </p>
                        <p className='fs-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dicta suscipit sit nisi consectetur exercitationem tempora quis optio quia amet reiciendis, animi, ad temporibus est, laboriosam itaque libero quos earum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dicta suscipit sit nisi consectetur exercitationem tempora quis optio quia amet reiciendis, animi, ad temporibus est, laboriosam itaque libero quos earum.
                        </p>
                        <p className='fs-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dicta suscipit sit nisi consectetur exercitationem tempora quis optio quia amet reiciendis, animi, ad temporibus est, laboriosam itaque libero quos earum!
                        </p>
                    </div>
                    <div className="photo col-5 p-5">
                        <div className="card m-5">
                            <img src={person2} alt="Co-Owner of The Red Deck"/>  
                        </div>  
                    </div>
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="photo col-5 p-5">
                        <div className="card m-5">
                            <img src={person3} alt="Manager of The Red Deck"/>  
                        </div>
                    </div>
                    <div className="info col-5 text-white border-bottom m-5 p-5">
                        <h1>PERSON NAME</h1>
                        <p>GENERAL MANGER. AUSTIN, TX</p>
                        <p className='fs-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dicta suscipit sit nisi consectetur exercitationem tempora quis optio quia amet reiciendis, animi, ad temporibus est, laboriosam itaque libero quos earum.
                        </p>
                        <p className='fs-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dicta suscipit sit nisi consectetur exercitationem tempora quis optio quia amet reiciendis, animi, ad temporibus est, laboriosam itaque libero quos earum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dicta suscipit sit nisi consectetur exercitationem tempora quis optio quia amet reiciendis, animi, ad temporibus est, laboriosam itaque libero quos earum.
                        </p>
                        <p className='fs-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dicta suscipit sit nisi consectetur exercitationem tempora quis optio quia amet reiciendis, animi, ad temporibus est, laboriosam itaque libero quos earum!
                        </p>
                    </div> 
                </div>
            </div>
            
        </>
    )
}