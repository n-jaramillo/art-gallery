function Gallery(props) {
    let primaryImg = (
        <img src={props.objectImg} alt={props.title} style={{ "max-height": "70vh", "max-width": "90%" }} />
    )

    if (props.objectImg === "") {
        primaryImg = (
            <div style={{ height: "200px", width: "300px", "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", display: "inline-flex", "align-items": "center", "justify-content": "center" }}>
                <p style={{ "font-variant": "small-caps", "font-weight": "bold", "font-size": "20px" }}>No Image Available</p>
            </div>
        )
    }

    return (
        <div style={{ "background-color": "#e9e9ed", width: "90%", margin: "30px auto", "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
            <h1 style={{ padding: "20px 50px 0", "font-variant": "small-caps", "font-size": "20px" }}>{props.title}</h1>
            {primaryImg}
            <p style={{ "font-variant": "small-caps", padding: "20px 0px 30px", }}>{props.artist}</p>
        </div>
    )
}

export default Gallery