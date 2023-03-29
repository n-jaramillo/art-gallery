function Gallery(props) {
    let primaryImg = (
        <img src={props.objectImg} alt={props.title} />
    )

    if (props.objectImg === "") {
        primaryImg = (
            <div className="noImg">
                <p>No Image Available</p>
            </div>
        )
    }

    return (
        <div className="gallery">
            <h1>{props.title}</h1>
            {primaryImg}
            <p>{props.artist}</p>
        </div>
    )
}

export default Gallery