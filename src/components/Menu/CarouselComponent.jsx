import cafe2 from '../../assets/images/cafe2.jpg';
import cafe3 from '../../assets/images/cafe3.jpg';
import cafe4 from '../../assets/images/cafe4.jpg';
import cafe5 from '../../assets/images/cafe5.jpg';
import cafe6 from '../../assets/images/cafe6.jpg';
import cafe7 from '../../assets/images/cafe7.jpg';

export function CarouselComponent() {
    return (
        <>
         <div id="carouselExampleControls" className="carousel slide bg-white" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={cafe2} className="col-6 w-50" alt="..."/>
                        <img src={cafe3} className="col-6 w-50" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={cafe4} className="col-6 w-50" alt="..."/>
                        <img src={cafe5} className="col-6 w-50" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={cafe6} className="col-6 w-50" alt="..."/>
                        <img src={cafe7} className="col-6 w-50" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}