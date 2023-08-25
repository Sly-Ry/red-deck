export function BgImageComponent( {img, fixed} ) {
    return (
        <>
            <img src={img} alt="a view of the cafe from the bushes" className={`img ${fixed}`} style={{maxHeight: '1200px', zIndex: -1}}/>
        </>
    )
}