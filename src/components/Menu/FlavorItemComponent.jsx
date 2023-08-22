export default function FlavorItemComponent( {name, price, desc}) {
    return (
        <>
            <div className="row mb-3">
                <div className='title col-10 d-flex justify-content-between align-items-center'>
                    <p className="name fs-5">{name}</p>
                    <p className="price fs-5">$<span className='fs-3'>{price}</span></p>
                </div>
                <p className='text-start'>{desc}</p>
            </div>
        </>
    )
}