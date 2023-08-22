import FlavorItemComponent from "./FlavorItemComponent";

export default function FlavorComponent( {name, items}) {
    return (
        <>
            <div className="col-3 px-4 ">
                <p className='col-title text-start fs-5 text-uppercase'>{name}</p>
                {
                    items.map(item => {
                        return (
                            <>
                                <FlavorItemComponent
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