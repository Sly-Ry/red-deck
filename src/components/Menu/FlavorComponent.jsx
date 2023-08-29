import FlavorItemComponent from "./FlavorItemComponent";

export default function FlavorComponent( {key, name, items}) {
    return (
        <>
            <div key={key} className="flavor col-md-6 col-lg-3 mb-4 px-3">
                <p className='col-title text-start fs-5 text-uppercase'>{name}</p>
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