import { combineReducers, configureStore } from "@reduxjs/toolkit"
import callsReducer from "./calls"
import recordsReducer from "./records"

const rootReducer = combineReducers({
    calls: callsReducer,
    records: recordsReducer
})

export function createStore() {
    return configureStore({
        reducer: rootReducer
    })
}
