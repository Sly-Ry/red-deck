import FlavorItemComponent from "./FlavorItemComponent";

export default function FlavorComponent( {key, name, items}) {
    return (
        <>
            <div key={key} className="col-3 px-4 ">
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