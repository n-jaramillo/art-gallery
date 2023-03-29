import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData, incrementId, decrementId, inputId, reset } from './features/dataSlice'

function ButtonBar() {
    const data = useSelector((state) => state.data)
    const dispatch = useDispatch()

    return (
        <div className="buttonBar">
            <button onClick={() => dispatch(decrementId(-5))}>
                &lt;&lt; Way Back
            </button>
            <button onClick={() => dispatch(decrementId(-1))}>
                &lt; Back
            </button>
            <button onClick={() => dispatch(incrementId(1))}>
                Next &gt;
            </button>
            <button onClick={() => dispatch(incrementId(5))}>
                Big Next &gt;&gt;
            </button>
            <br />
            <br />
            <button onClick={() => dispatch(fetchData())}>Get Data</button>
            <input type="number" value={data.objectId} onChange={(e) => dispatch(inputId(Number(e.target.value)))} />
            <button onClick={() => dispatch(reset())}>Reset ID</button>
        </div>
    )
}

export default ButtonBar