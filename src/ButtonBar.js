function ButtonBar(props) {
    return (
        // TODO: Error Checking
        <div>
            <button value={-5} onClick={props.handleIterate}>&lt;&lt; Way Back</button>
            <button value={-1} onClick={props.handleIterate}>&lt; Back</button>
            <button value={1} onClick={props.handleIterate}>Next &gt;</button>
            <button value={5} onClick={props.handleIterate}>Big Next &gt;&gt;</button>
        </div>
    )
}

export default ButtonBar