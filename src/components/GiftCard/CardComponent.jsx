import { LogoLayout } from "../../layouts/NavLayout/LogoLayout";
import cardBg1 from "../../assets/images/bg/bg2.jpg";

export function CardLayout({price, tickets}) {
    return (
        <>
            <div className="col-6 d-flex align-items-center justify-content-center p-5">
                <div className="card bg-danger shadow-lg" style={{width: 540, minWidth: 540}}>
                    <img className="card-img" src={cardBg1} alt="a gift card" />
                    <div className="card-img-overlay text-white">
                        <div className="price text-end">
                            <h1>${price}</h1>
                            </div>
                        <div className="card-title text-center ">
                            <LogoLayout />
                        </div>
                        <div className="text-start text-uppercase">{tickets}</div>
                    </div>
                </div>
            </div>
        </>
    )
}