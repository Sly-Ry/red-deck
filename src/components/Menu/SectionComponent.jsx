import FlavorComponent from "./FlavorComponent";

export function SectionComponent( {color, name, flavors}) {
    return (
        <>
            <div id={name} className={`section row p-5 ${color}`} style={{minHeight: '100vh'}}>
                <p className='section-title text-start text-uppercase'>{name}</p>
                <div className="row">
                    {
                        flavors.map(flavor => {
                            return (
                                <>
                                    <FlavorComponent
                                        key={flavor.id}
                                        name={flavor.name}
                                        items={flavor.items}
                                    />
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
} 