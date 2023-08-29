import { LogoLayout } from "../../layouts/NavLayout/LogoLayout";
import cardBg1 from "../../assets/images/bg/bg2.jpg";

export function CardComponent({price, tickets, en}) {
    return (
        <>
            <div id="gift-card" className="col-10 col-xxl-6 d-flex align-items-center justify-content-center p-5">
                <div className={`card bg-danger shadow-lg ${en}`} style={{width: 410, minWidth: 410}}>
                    <img className="card-img" src={cardBg1} alt="a gift card" />
                    <div className="card-img-overlay text-white">
                        <div className="price text-end p-2">
                            <h1>${price}</h1>
                            </div>
                        <div className="card-title text-center">
                            <LogoLayout />
                        </div>
                        <div className="tickets text-uppercase">{tickets}</div>
                    </div>
                </div>
            </div>
        </>
    )
}