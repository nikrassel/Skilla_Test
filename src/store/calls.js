import { createSlice } from "@reduxjs/toolkit"
import request from "../utils/callsRequest"

const callsSlice = createSlice({
    name: "calls",
    initialState: {
        entities: null,
        isLoading: false,
        error: null
    },
    reducers: {
        callsRequested: (state) => {
            state.isLoading = true
        },
        callsReceved: (state, action) => {
            state.entities = action.payload
            state.isLoading = false
        },
        callsRequestedFailed: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        }
    }
})

const { reducer: callsReducer, actions } = callsSlice
const { callsRequested, callsReceved, callsRequestedFailed } = actions

export const loadCalls = () => async (dispatch) => {
    dispatch(callsRequested())
    try {
        const content = await request()
        dispatch(callsReceved(content))
    } catch (error) {
        dispatch(callsRequestedFailed(error.message))
    }
}

export default callsReducer