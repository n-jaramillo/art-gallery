import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    objectId: 12720,
    apiData: {}
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, action) => {
            return { ...state, apiData: action.payload }
        },
        incrementId: (state) => {
            return { ...state, objectId: state.objectId + 1 }
        },
        decrementId: (state) => {
            return { ...state, objectId: state.objectId - 1 }
        },
        inputId: (state, action) => {
            return { ...state, objectId: action.payload }
        },
        reset: () => {
            return initialState
        }
    }
})

export const { setData, incrementId, decrementId, inputId, reset } = dataSlice.actions

export const fetchData = () => {
    const dataThunk = async (dispatch, getState) => {
        let state = getState
        console.log(state)
        const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${state.data.objectId}`)
        const resData = await response.json()
        console.log(resData)
        dispatch(setData(resData))
    }
    return dataThunk
}

export default dataSlice.reducer