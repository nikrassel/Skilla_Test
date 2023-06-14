import { createSlice } from "@reduxjs/toolkit"
import requestRecord from "../utils/recordRequest"

const callsSlice = createSlice({
    name: "records",
    initialState: {
        entities: null,
        isLoading: false,
        error: null
    },
    reducers: {
        recordRequested: (state) => {
            state.isLoading = true
        },
        recordReceved: (state, action) => {
            state.entities = action.payload
            state.isLoading = false
        },
        recordRequestedFailed: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        }
    }
})

const { reducer: recordsReducer, actions } = callsSlice
const { recordRequested, recordReceved, recordRequestedFailed } = actions

export const loadRecord = (data) => async (dispatch) => {
    dispatch(recordRequested())
    try {
        const content = await requestRecord(data)
        dispatch(recordReceved(content))
    } catch (error) {
        dispatch(recordRequestedFailed(error.message))
    }
}

export default recordsReducer
