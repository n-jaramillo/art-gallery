function Gallery(props) {
    let galleryObject = props.data.apiData

    let galleryImg = (
        <img src={galleryObject.primaryImage} alt={galleryObject.title} />
    )

    if (galleryObject.primaryImage === "") {
        galleryImg = (
            <div className="noImg">
                <p>No Image Available</p>
            </div>
        )
    }

    return (
        <div className="gallery">
            <h1>{galleryObject.title}</h1>
            {galleryImg}
            <p>{galleryObject.artistDisplayName}</p>
        </div>
    )
}

export default Gallery