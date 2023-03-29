function ButtonBar(props) {
    return (

        // TODO: Error Checking
        <div>
            <button value={-5} onClick={props.handleIterate} style={{border: "none", margin: "0 5px", padding: "5px 10px"}}>&lt;&lt; Way Back</button>
            <button value={-1} onClick={props.handleIterate} style={{border: "none", margin: "0 5px", padding: "5px 10px"}}>&lt; Back</button>
            <button value={1} onClick={props.handleIterate} style={{border: "none", margin: "0 5px", padding: "5px 10px"}}>Next &gt;</button>
            <button value={5} onClick={props.handleIterate} style={{border: "none", margin: "0 5px", padding: "5px 10px"}}>Big Next &gt;&gt;</button>
        </div>
    )
}

export default ButtonBar