import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    objectId,
    apiData
}

export const dataSlice = createSlice({
    name: '',
    initialState,
    reducers: {
        setData: () => {

        },
        incrementId: () => {

        },
        decrementId: () => {

        },
        inputId: () => {

        },
        reset: () => {

        }
    }
})

export const { setData, incrementId, decrementId, inputId, reset } = dataSlice.actions

export default dataSlice.reducer