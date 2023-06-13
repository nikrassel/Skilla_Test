import { createSlice } from "@reduxjs/toolkit"
import request, { requestPeriod } from "../utils/callsRequest"

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

export const loadCalls = (data) => async (dispatch) => {
    dispatch(callsRequested())
    try {
        const content = await request(data)
        dispatch(callsReceved(content))
    } catch (error) {
        dispatch(callsRequestedFailed(error.message))
    }
}

export const loadCallsPeriod = (from, to) => async (dispatch) => {
    dispatch(callsRequested())
    try {
        const content = await requestPeriod(from, to)
        dispatch(callsReceved(content))
    } catch (error) {
        dispatch(callsRequestedFailed(error.message))
    }
}

export const getCalls = () => (state) => state.calls.entities
export const getLoadingStatus = () => (state) => state.calls.isLoading

export default callsReducer