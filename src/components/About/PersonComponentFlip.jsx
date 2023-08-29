export function PersonComponentFlip({ photo, alt, name, based, desc1, desc2, desc3 }) {
    return (
        <>
            <div className="row d-flex justify-content-evenly align-items-center page">
                <div className="photo col-10 col-md-8 col-lg-5 col-xxl-4 hidden">
                    <div className="card m-4">
                        <img src={photo} alt={alt}/>  
                    </div>  
                </div>
                <div className="info col-12 col-lg-6 col-xxl-5 text-white border-bottom p-5">
                    <h1>{name}</h1>
                    <p>{based}</p>
                    <p className='fs-5'>
                        {desc1}
                    </p>
                    <p className='fs-5'>
                        {desc2}
                    </p>
                    <p className='fs-5'>
                        {desc3}
                    </p>
                </div>
                <div className="photo col-10 col-md-8 col-lg-5 col-xxl-4 en">
                    <div className="card m-4">
                        <img src={photo} alt={alt}/>  
                    </div>  
                </div>
            </div>
        </>
    )
}