import { combineReducers, configureStore } from "@reduxjs/toolkit"
import callsReducer from "./calls"

const rootReducer = combineReducers({
    calls: callsReducer
})

export function createStore() {
    return configureStore({
        reducer: rootReducer
    })
}