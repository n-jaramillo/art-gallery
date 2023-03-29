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

export default dataSlice.reducer