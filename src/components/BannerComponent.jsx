import $ from 'jquery';

import './BannerComponent.css';

export function BannerComponent( {color, quote, motto, submotto} ) {
    
    $(function() {
        $('div.side').addClass(color);
    });

    return (
        <>
            <div className="banner row">
                <div className="col-6"></div>
                <div className="side col-6 d-flex flex-column justify-content-center align-items-start px-5" style={{height: '100vh'}}>
                    <p className='quote fs-1 text-color1'>{quote}</p>
                    <h1 className='motto text-uppercase'>{motto}</h1>
                    <p className='submotto fs-3 text-uppercase'>{submotto}</p>
                </div>
            </div>
        </>
    )
}