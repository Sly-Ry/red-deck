export function PersonComponent({ photo, alt, name, based, desc1, desc2, desc3 }) {
    return (
        <>
            <div className="row d-flex justify-content-center align-items-center"  style={{height: '100vh'}}>
                    <div className="photo col-5 p-5">
                        <div className="card m-5">
                            <img src={photo} alt={alt}/>  
                        </div>  
                    </div>
                    <div className="info col-5 text-white border-bottom m-5 p-5">
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
                </div>
        </>
    )
}