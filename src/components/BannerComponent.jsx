import $ from 'jquery';

export function BannerComponent( {color, quote, motto, submotto} ) {
    
    $(function() {
        $('div.side').addClass(color);
    });

    return (
        <>
            <div className="banner row">
                <div className="col-6"></div>
                <div className="side col-6 d-flex flex-column justify-content-center align-items-center" style={{height: '100vh'}}>
                    <p className='quote fs-1 text-color1'>{quote}</p>
                    <h1 className='motto'>{motto}</h1>
                    <p className='dates fs-3'>{submotto}</p>
                </div>
            </div>
        </>
    )
}