export function BgImageComponent( {img} ) {
    return (
        <>
            <img src={img} alt="a view of the cafe from the bushes" className='img fixed-top' style={{maxHeight: '1200px', zIndex: -1}}/>
        </>
    )
}