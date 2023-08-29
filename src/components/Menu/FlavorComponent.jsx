import FlavorItemComponent from "./FlavorItemComponent";

export default function FlavorComponent( {key, name, items}) {
    return (
        <>
            <div key={key} className="flavor col-sm-8 col-lg-5 col-xxl-3 mb-4">
                <p className='col-title fs-5 fw-bold text-start text-uppercase'>{name}</p>
                {
                    items.map(item => {
                        return (
                            <>
                                <FlavorItemComponent
                                    key={item.id}
                                    name={item.name}
                                    price={item.price}
                                    desc={item.desc}
                                />
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}